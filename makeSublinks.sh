#! /bin/bash

subs=(resume setdiff projects wasmview wasim minerray tools newline flakyui compiler-bugs wobfuscator waspur function-inlining) 

for i in "${subs[@]}"
do
echo $i;
cp build/index.html "build/$i.html"
done