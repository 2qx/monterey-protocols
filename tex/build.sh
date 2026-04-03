#!/usr/bin/bash

pdflatex monterey-protocols.tex;

pdfjam cover.pdf monterey-protocols.pdf back.pdf -o monterey-protocols-A5.pdf;

#cp monterey-protocols.pdf monterey-protocols-A5.pdf;

pdfjam monterey-protocols-A5.pdf --booklet true --paper a4 --landscape --outfile monterey-protocols-zine.pdf;

cp monterey-protocols-A5.pdf ../assets/monterey-protocols-A5.pdf;
cp monterey-protocols-zine.pdf ../assets/monterey-protocols-zine.pdf;
