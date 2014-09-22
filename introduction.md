---
layout: base
title:  'Universal Dependencies'
---

## Introduction

Universal Dependencies is a project that seeks to develop cross-linguistically consistent treebank
annotation for multiple languages with the goal of facilitating multilingual parser development, 
cross-lingual learning, and parsing research from a language typology perspective. The annotation
scheme is based on (universal) Stanford dependencies (de Marneffe et al., 2006, 2008, 2014), Google 
universal part-of-speech tags (Petrov et al., 2012), and the Interset interlingua for 
morphosyntactic tagsets (Zeman, 2008). The general philosophy is to provide a universal 
inventory of categories and guidelines to facilitate consistent annotation of similar 
constructions across languages, while allowing language-specific extensions when necessary.

## History

The Stanford dependencies were originally developed as a backend to the Stanford parser,
eventually emerged as the de facto standard for dependency analysis of English, and has since 
been adapted to a number of different languages (Chang et al., 2009, Bosco et al., 2013, Seraji et al., 2013, Tsarfaty, 2013).
The Google universal tag set grew out of the cross-linguistic error analysis based on the 
CoNLL-X shared task data by McDonald and Nivre (2007), was initially used for unsupervised
part-of-speech tagging by Das and Petrov (2011), and has since been adopted as a widely used
standard for mapping diverse tagsets to a common standard.
The Interset (Zeman, 2008) started as a tool for conversion between morphosyntactic tagsets of multiple languages.
It dates back to 2006 when it was used in the first experiments with cross-lingual delexicalized parser adaptation
(Zeman and Resnik, 2008).
It was later employed as the morphological layer in HamleDT (Zeman et al., 2014) – a project that brings treebanks
of many languages under a common annotation scheme.

The first attempt to combine Stanford dependencies and Google universal tags into a universal
annotation scheme was the Universal Dependency Treebank (UDT) project (McDonald et al., 2013), 
which released treebanks for 6 languages in 2013 and 11 languages in 2014. This was followed by 
the development of universal Stanford dependencies (USD) (de Marneffe et al., 2014).
Universal Dependencies is the result of merging these two initiatives and incorporating 
the Interset inventory of morphosyntactic features. Both the universal tag set and the 
feature inventory have been revised in the process.

## Contributors

<!-- alphabetical by surname -->
* Jinho Choi
* Marie-Catherine de Marneffe
* Filip Ginter
* Yoav Goldberg
* [Jan Hajič](http://ufal.mff.cuni.cz/jan-hajic/)
* Christopher Manning
* Ryan McDonald
* [Joakim Nivre](http://stp.lingfil.uu.se/~nivre/)
* Slav Petrov
* Sampo Pyysalo
* Reut Tsarfaty
* [Dan Zeman](http://ufal.mff.cuni.cz/daniel-zeman/)

## References

* Bosco et al. 2013

* Chang et al. 2009

* Dipanjan Das, and Slav Petrov. 2011.

* Marie-Catherine de Marneffe, ... 2006.

* Marie-Catherine de Marneffe, ... 2008.

* Marie-Catherine de Marneffe, Timothy Dozat, Natalia Silveira, Katri
  Haverinen, Filip Ginter, Joakim Nivre, and Christopher Manning. 2014.
  [Universal Stanford Dependencies: A cross-linguistic
  typology](http://nlp.stanford.edu/pubs/USD_LREC14_paper_camera_ready.pdf).
  In *Proceedings of LREC*.

* Ryan McDonald, and Joakim Nivre. 2007. 

* Ryan McDonald, Joakim Nivre, Yvonne Quirmbach-Brundage, Yoav
  Goldberg, Dipanjan Das, Kuzman Ganchev, Keith Hall, Slav Petrov, Hao
  Zhang, Oscar Täckström, Claudia Bedini, Núria Bertomeu Castelló, and
  Jungmee Lee. 2013. [Universal Dependency Annotation for Multilingual
  Parsing](http://ryanmcd.com/papers/treebanksACL2013.pdf).
  In *Proceedings of ACL*.
  ([home page](https://code.google.com/p/uni-dep-tb/))

* Slav Petrov, Dipanjan Das, and Ryan McDonald. 2012. [A universal
  part-of-speech tagset](http://www.petrovi.de/data/universal.pdf).
  In *Proceedings of LREC*.
  ([home page](https://code.google.com/p/universal-pos-tags/))

* Seraji et al. 2013

* Tsarfaty 2013

* Daniel Zeman. 2008. [Reusable Tagset Conversion Using Tagset
  Drivers](http://lrec-conf.org/proceedings/lrec2008/pdf/66_paper.pdf).
  In *Proceedings of LREC*.
