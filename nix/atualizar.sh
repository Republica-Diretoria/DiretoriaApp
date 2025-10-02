#!/usr/bin/env sh

REV=$(git ls-remote "https://github.com/Republica-Diretoria/DiretoriaApp" "refs/heads/master" | cut -f1)
sed -i "s#rev = \".*\";#rev = \"${REV}\";#" ./source-derivation.nix
