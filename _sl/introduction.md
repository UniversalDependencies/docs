---
layout: base
title:  'Introduction'
permalink: sl/overview/introduction.html
---

# Introduction

Two separate treebanks are currenlty available for Slovenian: the default Slovenian UD Treebank and the Spoken Slovenian UD Treebank (SST).

## The Slovenian UD Treebank

The Slovenian UD Treebank is based on the [ssj500k Dependency Treebank](http://eng.slovenscina.eu/tehnologije/ucni-korpus) (Krek et al. 2013), a representative balanced collection of sampled texts from the reference FidaPLUS corpus of written Slovenian (Arhar and Gorjanc 2007) that have been manually segmented, tokenized, lemmatized and morphosyntactically tagged in accordance with the [JOS annotation scheme](http://nl.ijs.si/jos/index-en.html) (Erjavec et al. 2010). Additionnally, approximately one half of the ssj500k corpus (known as the ssj200k subcorpus) includes manually annotated dependency relations and this is what has been used as the basis of the Slovenian UD Treebank.

The conversion from the ssj200k treebank to the Slovenian UD Treebank was completely automatic, based on a large set of rules on both morphosyntactic and syntactic layer, which include different lexical, morphological and dependency features. Due to the specifics of the original JOS syntactic annotation scheme, not all dependency relations from the original ssj200k treebank could be converted automatically, resulting in a slightly smaller size of the Slovenian UD treebank.

The current verison of the Slovenian UD Treebank thus contains 7,996 sentences with 140,418 tokens taken from various text types, e.g. fiction, non-fiction and periodicals, dating from 1990-2000. The original JOS annotations are included
as part of the POSTAG (JOS morphosyntactic tags) and MISC (JOS dependency heads and labels) columns of the CONLLU format. Further revisions of this work, addition of new conversion rules and syntactic annotation guidelines remain a work in progress.

The conversions and guidelines have been contributed by Kaja Dobrovoljc, Tomaž Erjavec and Simon Krek.

### Acknowledgments

We wish to thank all of the contributors to the original ssj500k training corpus: Kristina Bizjak, Živa Blaževič, Klara Canzutti, Lea Cibrič, Kaja Dobrovoljc, Tadeja Dušej, Tomaž Erjavec, Ivana Fekeža, Nanika Holz, Urška Kamenšek, Simon Krek, Andreja Košir, Robert Kuret, Nina Ledinek, Andrej Lovšin, Boštjan Marhold, Nina Mikulin, Barbara Modrijan, Sara Može, Tanja Novak, Lea Peršič, Tanja Radovič, Simona Šinkovec, Urška Vranjek, Jerneja Umer, Petra Žalodec.

## The Spoken Slovenian UD Treebank (SST)

The Spoken Slovenian UD Treebank (SST) is the first syntactically annotated corpus of spoken Slovenian. The manual annotations have been performed on a representative sample of the reference [Gos corpus of spoken Slovenian](http://eng.slovenscina.eu/korpusi/gos) (Zwitter Vitez et al. 2013), a collection of transcribed audio recordings of monologic, dialogic and multi-party spontaneous speech in different everyday situations. The treebank is representative of speakers (sex, age, region, education), communication channels (TV, radio, telephone, personal contact) and communication settings (TV and radio shows, lectures, meetings, services, conversations between friends etc.). 

The spelling, tokenization and segmentation principles follow the transcription guidelines of the reference corpus (Verdonik et al. 2013) with the syntactic trees spanning over individual utterances (semantically, syntactically and acoustically delimited units, roughly corresponding to written sentences). The SST treebank includes manual annotations of lemmas, part-of-speech categories, morphological features and dependency relations in accordance with the Universal Dependencies annotation scheme. In addition to language-specific extensions, in line with the written Slovenian UD Treebank, the SST treebank also includes new speech-specific extensions to accommodate the structural and pragmatic particularities of spoken language syntax, such as disfluencies, fillers, parentheticals, general extenders etc. More information on the treebank construction and annotation is given in (Dobrovoljc and Nivre 2016).

The current version of the SST treebank includes 29,488 tokens or 3,188 utterances, produced by 606 speakers in 287 different speech events.

The treebank construction and annotation was carried out by Kaja Dobrovoljc under the supervision of Joakim Nivre.

## References
* Špela Arhar and Vojko Gorjanc. 2007. Korpus FidaPLUS: nova generacija slovenskega referenčnega korpusa (The FidaPLUS corpus: a new generation of the Slovene reference corpus). Jezik in slovstvo, 52(2).
* Kaja Dobrovoljc and Joakim Nivre. 2016. The Universal Dependencies Treebank of Spoken Slovenian. In: Proceedings of the Tenth International Conference on Language Resources and Evaluation (LREC’16), Portorož, Slovenia.
* Tomaž Erjavec, Darja Fišer, Simon Krek and Nina Ledinek. 2010. The JOS Linguistically Tagged Corpus of Slovene. In: Proceedings of the Seventh International Conference on Language Resources and Evaluation (LREC'10), Malta.
* Simon Krek, Tomaž Erjavec, Kaja Dobrovoljc, Sara Može, Nina Ledinek and Nanika Holz. 2013. Training corpus ssj500k 1.3. http://hdl.handle.net/11356/1029.
* Darinka Verdonik, Iztok Kosem, Ana Zwitter Vitez, Simon Krek and Marko Stabej. 2013. Compilation, transcription and usage of a reference speech corpus: the case of the Slovene corpus GOS. Language Resources and  Evaluation, 47(4):1031–1048.
* Ana Zwitter Vitez, Jana Zemljarič Miklavčič, Simon Krek, Marko Stabej and Tomaž Erjavec. 2013. Spoken corpus Gos 1.0. Slovenian language resource repository CLARIN.SI. http://hdl.handle.net/11356/1040.


