#!/usr/bin/bash

pdflatex monterey-protocols.tex;

pdfjam cover.pdf monterey-protocols.pdf back.pdf -o monterey-protocols-A5.pdf;

pdfjam monterey-protocols-A5.pdf '1,4-78' -o ../assets/monterey-protocols_A5.pdf;

pdfjam monterey-protocols.pdf --booklet true --paper a4 --landscape --outfile monterey-protocols-zine.pdf;
pdfjam --landscape --angle 180 monterey-protocols-zine_cover.pdf '1,{}'  --outfile monterey-protocols-zine_cover-page.pdf;
pdfjam monterey-protocols-zine_cover-page.pdf monterey-protocols-zine.pdf --paper a4 --landscape  --outfile ../assets/monterey-protocols-zine.pdf;