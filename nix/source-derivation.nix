{ pkgs ? import <nixpkgs> {} }:

with pkgs;

{
  source-code = stdenv.mkDerivation {
    name = "source-code-php";
    src = fetchgit {
    url = "https://github.com/Republica-Diretoria/DiretoriaApp.git";
    rev = "2d0d2bb852c52cc00637e8f25de31e38036718e1";
    sha256 = "0in08z76rz84yh5ramm7796r25x3nai26r0798q1z28mlxjs4ppl";
};

    phases = [ "installPhase" ];
    installPhase = ''
      cp -r $src $out
    '';
  };
}
