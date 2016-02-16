---
layout: base
title:  'Introduction'
permalink: sl/overview/introduction.html
---

# Introduction

The Slovenian UD Treebank is based on the [ssj500k Dependency Treebank](http://eng.slovenscina.eu/tehnologije/ucni-korpus) (Krek et al. 2013), a representative balanced collection of sampled texts from the reference FidaPLUS corpus of written Slovenian (Arhar and Gorjanc 2007) that have been manually segmented, tokenized, lemmatized and morphosyntactically tagged in accordance with the [JOS annotation scheme](http://nl.ijs.si/jos/index-en.html) (Erjavec et al. 2010). Additionnally, approximately one half of the ssj500k corpus (known as the ssj200k subcorpus) includes manually annotated dependency relations and this is what has been used as the basis of the Slovenian UD Treebank.

The conversion from the ssj200k treebank to the Slovenian UD Treebank was completely automatic, based on a large set of rules on both morphosyntactic and syntactic layer, which include different lexical, morphological and dependency features. Due to the specifics of the original JOS syntactic annotation scheme, not all dependency relations from the original ssj200k treebank could be converted automatically, resulting in a slightly smaller size of the Slovenian UD treebank.

The current verison of the Slovenian UD Treebank thus contains 7,996 sentences with 140,418 tokens taken from various text types, e.g. fiction, non-fiction and periodicals, dating from 1990-2000. The original JOS annotations are included
as part of the POSTAG (JOS morphosyntactic tags) and MISC (JOS dependency heads and labels) columns of the CONLLU format. Further revisions of this work, addition of new conversion rules and syntactic annotation guidelines remain a work in progress.

The conversions and guidelines have been contributed by Kaja Dobrovoljc, Tomaž Erjavec and Simon Krek.

## Acknowledgments

We wish to thank all of the contributors to the original ssj500k training corpus: Kristina Bizjak, Živa Blaževič, Klara Canzutti, Lea Cibrič, Kaja Dobrovoljc, Tadeja Dušej, Tomaž Erjavec, Ivana Fekeža, Nanika Holz, Urška Kamenšek, Simon Krek, Andreja Košir, Robert Kuret, Nina Ledinek, Andrej Lovšin, Boštjan Marhold, Nina Mikulin, Barbara Modrijan, Sara Može, Tanja Novak, Lea Peršič, Tanja Radovič, Simona Šinkovec, Urška Vranjek, Jerneja Umer, Petra Žalodec.

## References

* Simon Krek, Tomaž Erjavec, Kaja Dobrovoljc, Sara Može, Nina Ledinek and Nanika Holz. 2013. 
Training corpus ssj500k 1.3. http://hdl.handle.net/11356/1029.
* Špela Arhar and Vojko Gorjanc. 2007. Korpus FidaPLUS: nova generacija slovenskega referenčnega korpusa (The FidaPLUS corpus: a new generation of the Slovene reference corpus). Jezik in slovstvo, 52(2). 
* Tomaž Erjavec, Darja Fišer, Simon Krek and Nina Ledinek. 2010. The JOS Linguistically Tagged Corpus of Slovene. In: Proceedings of the Seventh International Conference on Language Resources and Evaluation (LREC'10), Malta.


