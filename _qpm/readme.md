# Summary

The Pomak UD treebank (UD_Pomak_QPMT) is derived from the Pomak Dependency Treebank
(http://?????.ilsp.gr), a resource developed and maintained by
researchers at the Institute for Language and Speech Processing/Athena
R.C. (http://www.ilsp.gr).

# Introduction

The Pomak UD treebank consists of 6350 sentences (86700  tokens). The
data in the current release derive from primary printed texts mostly about the Pomak traditions, however 
some recent journalistic texts have been also included. Athena R.C. has obtained the license from the authors to 
publish the texts or parts of them and will made the texts available soon on the repositories 
of the Philotis project (https://www.ilsp.gr/en/projects/filotis-en/). The Pomak treebank is licensed under the terms of [Creative
Commons Attribution-NonCommercial-ShareAlike, CC BY-NC-SA
3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/).


The morphological annotation of the Pomak UD treebank
was created through a three step procedure (i) a semi-automatic conversion of
the morphological lexicon Rodopsky (https://www.rodopsky.gr/)
to the UD.v2 morphological annotation frameword and CONLLU format (ii) the converted lexicon was applied on the corpus 
(iii) morphological annotation was manually corrected by two annotators
(Interannotation agreement kappa scores on 476 sentences: PoS tags 0.90, features 0.87, lemmas 0.93). 

The current syntactic annotation of the corpus has been performed automatically with tools with pre-existing knowledge. The 
golden syntactically annotated version of the Pomak UD treebank is being developed and will be made available at the end of 2022.


# Acknowledgments

We wish to thank all contributors to the original annotation
efforts. Manual morphological annotation was carried out by Ritvan Karahodga, who also contributed to its automatic parts, and Nicolaos Constantinides. 
Panagiotis Krimpas supported the annotation with expertise in Slavic languages and 
Stella Markantonatou with expertise in formal grammatical frameworks. Nicolaos Kokkas contributed to the collection of Pomak texts. 

## References

* 
# Data splits

- Train/dev/test sets: 1662/403/456 sentences, 41212/10139/10422 tokens

# Changelog


* 2022-04-12 v1.1
  * Initial release of golden morphologically annoated corpus

<pre>
=== Machine-readable metadata (DO NOT REMOVE!) ================================
Data available since: UD v1.1
License: CC BY-NC-SA 3.0
Includes text: yes
Genre: news folk_tales
Lemmas: manual correction  automatic assignment native
UPOS: manual correction automatic assignment native
XPOS: 
Features: manual correction automatic assignment native 
Relations: automatic
Contributors: Ritvan Karahodja, Vivian Stamou, Stella Markantonatou
Contributing: -
Contact: marks@athenarc.gr, ritvank@gmail.com
===============================================================================
</pre>
