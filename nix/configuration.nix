{ config, pkgs, ... }:

let
  source = import ./source-derivation.nix { inherit pkgs; };
in

{
  imports =
    [
      ./hardware-configuration.nix
    ];

boot.loader.grub.enable = true;
boot.loader.grub.device = "/dev/sda";
boot.loader.grub.useOSProber = true;

boot.tmp.useTmpfs = true;

networking.hostName = "servidorDiretoria"; # Define your hostname.
networking.networkmanager.enable = true;

time.timeZone = "America/Sao_Paulo";

i18n.defaultLocale = "pt_BR.UTF-8";

i18n.extraLocaleSettings = {
  LC_ADDRESS = "pt_BR.UTF-8";
  LC_IDENTIFICATION = "pt_BR.UTF-8";
  LC_MEASUREMENT = "pt_BR.UTF-8";
  LC_MONETARY = "pt_BR.UTF-8";
  LC_NAME = "pt_BR.UTF-8";
  LC_NUMERIC = "pt_BR.UTF-8";
  LC_PAPER = "pt_BR.UTF-8";
  LC_TELEPHONE = "pt_BR.UTF-8";
  LC_TIME = "pt_BR.UTF-8";
};

console.keyMap = "br-abnt2";

users.users.rego = {
  isNormalUser = true;
  shell = pkgs.zsh;
  description = "rego";
  extraGroups = [ "networkmanager" "wheel" ];
  packages = with pkgs; [
  ];
};

users.users.gru = {
  isNormalUser = true;
  shell = pkgs.zsh;
  description = "gru";
  extraGroups = [ "networkmanager" "wheel" ];
  packages = with pkgs; [
  ];
};

users.users.bibi = {
  isNormalUser = true;
  description = "bibi";
  extraGroups = [ "networkmanager" "wheel" ];
  packages = with pkgs; [
  ];
};

programs.zsh = {
  enable = true;
  enableCompletion = true;
  autosuggestions.enable = true;
  syntaxHighlighting.enable = true;
};

environment.variables.EDITOR = "nvim";
environment.variables.PATH = "${pkgs.clang-tools}/bin:$PATH";

nixpkgs.config.allowUnfree = true;

security.sudo.enable = true;

programs.nix-ld.enable = true;
programs.nix-ld.libraries = with pkgs; [
  stdenv.cc.cc
];

environment.systemPackages = with pkgs; [
  git
  neovim
  wget
];

services.openssh.enable = true;

system.stateVersion = "25.05";

system.autoUpgrade = {
  enable = true;
  dates = "04:00";
  randomizedDelaySec = "45min";
};

networking.firewall = {
  allowPing = true;
  allowedTCPPorts = [ 80 443 ];
};

services.httpd = {
  enable = true;
  adminAddr = "felipetzne12@gmail.com";
  enablePHP = true;
  virtualHosts."example.org" = {
    documentRoot = source.source-code;
    # want ssl + a let's encrypt certificate? add `forceSSL = true;` right here
  };
};

services.mysql = {
  enable = true;
  package = pkgs.mariadb;

initialDatabases = [
    { name = "tabela";
      schema = pkgs.writeText "init.sql" ''
        CREATE TABLE entries (text TEXT);
      '';
    }
  ];
  ensureUsers = [
    { name = "rego";
      ensurePermissions = {
        "rego.*" = "ALL PRIVILEGES";
      };
    }
  ];
};

systemd.tmpfiles.rules = [
    "d /var/www/mysite.com"
    "f /var/www/mysite.com/index.php - - - - <?php phpinfo();"
  ];

}
