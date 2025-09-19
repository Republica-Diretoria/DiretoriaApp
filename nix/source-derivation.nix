{ pkgs ? import <nixpkgs> {} }:

with pkgs;

{

source-code = stdenv.mkDerivation {
  name = "source-code-php";

  src = MUDAR;

phases = [ "installPhase" ];
    installPhase = ''
      cp -r $src $out
    '';
  };
}
