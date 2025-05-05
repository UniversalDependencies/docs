---
layout: base
title:  'History of UD'
shortdef: 'history'
udver: '2'
---

# History of the UD Project

The UD annotation scheme is based on an evolution of (universal) Stanford dependencies (de Marneffe et al., 2006, 2008, 2014),
Google universal part-of-speech tags (Petrov et al., 2012), and the Interset interlingua for morphosyntactic tagsets (Zeman, 2008).
The first attempt to combine Stanford dependencies and Google universal tags into a universal annotation scheme was the
Universal Dependency Treebank (UDT) project (McDonald et al., 2013), which released treebanks for 6 languages in 2013 and
11 languages in 2014, and the first proposal for incorporating morphology was made by Tsarfaty (2013).
The second version of HamleDT (Rosa et al., 2014) provided Stanford/Google annotation for 30 languages in 2014.
This was followed by the development of universal Stanford dependencies (USD) (de Marneffe et al., 2014).
The new Universal Dependencies is the result of merging all these initiatives into a single coherent framework,
including designing a revised version of the CoNLL-X format (called CoNLL-U).

The first version of the UD guidelines was released in October 2014. Building beyond earlier efforts,
UD POS categories have substantive definitions and are not just equivalence classes of categories in underlying language-particular treebanks,
UD morphological features aim to provide a basic set of the features which are most crucial for analysis and are widespread across languages,
and UD dependencies emphasizes grammatical relations common from many grammatical frameworks. That is, they are centrally organized around notions
of subject, object, clausal complement, noun determiner, noun modifier, etc. The goal of the new universal version was to add or refine relations
to better accommodate the grammatical structures of typologically different languages and to clean up some of the quirkier and more English-specific
features of earlier proposals. The second version of the UD guidelines was released in December 2016.
There have been gradual [improvements to the guidelines](changes.html) in the 2020s.
Publications have detailed the version 2 linguistic framework (de Marneffe et al., 2021) and surveyed the project's data releases (Nivre et al., 2016, 2020).

See also:

- [Guidelines changes](changes.html)
- [Release history](download.html)
- [Events](events.html)

## Selected Publications

There are now hundreds of publications on various aspects and uses of UD, ranging from papers on the issues involved in
constructing UD treebanks for particular languages to approaches to multilingual syntactic parsing
to crosslinguistic psycholinguistic studies enabled by the common representation of UD.
A few key references are listed below. Many other publications about UD can be found in the references of these papers;
via the Universal Dependencies Workshops ([proceedings on the ACL Anthology](https://aclanthology.org/venues/udw/)) and other [events](events.html);
or by [searching for “Universal Dependencies” on Google Scholar](https://scholar.google.com/scholar?q=%22Universal+dependencies%22).

### Recent Overviews

* Marie-Catherine de Marneffe, Christopher Manning, Joakim Nivre, Daniel Zeman. 2021.
  [Universal Dependencies](https://doi.org/10.1162/coli_a_00402). In *Computational Linguistics* 47(2): 255–308.

* Joakim Nivre, Marie-Catherine de Marneffe, Filip Ginter, Jan Hajič, Christopher Manning, Sampo Pyysalo, Sebastian Schuster,
  Francis Tyers, Daniel Zeman. 2020. [Universal Dependencies v2: An Evergrowing Multilingual Treebank Collection](https://aclanthology.org/2020.lrec-1.497/).
  In *Proceedings of LREC*, pp. 4034–4043, Marseille, France.

### Earlier Publications


#### 2019

* Kim Gerdes, Bruno Guillaume, Sylvain Kahane, Guy Perrier. 2019. [Improving Surface-syntactic Universal Dependencies (SUD): surface-syntactic functions and deep-syntactic features](https://www.aclweb.org/anthology/W19-7814.pdf), _Proceedings of the 17th international conference on Treebanks and Linguistic Theories (TLT)_, SyntaxFest, Paris.

#### 2018

* Daniel Zeman, Jan Hajič, Martin Popel, Martin Potthast, Milan Straka, Filip Ginter, Joakim Nivre, Slav Petrov. 2018.
  [CoNLL 2018 Shared Task: Multilingual Parsing from Raw Text to Universal Dependencies](http://universaldependencies.org/conll18/proceedings/pdf/K18-2001.pdf).
  In *Proceedings of the CoNLL 2018 Shared Task: Multilingual Parsing from Raw Text to Universal Dependencies*, pp. 1-21.

#### 2017

* Joakim Nivre, Daniel Zeman, Filip Ginter, Francis Tyers. 2017.
  [EACL tutorial on Universal Dependencies](http://universaldependencies.org/eacl17tutorial/).

* Daniel Zeman, Martin Popel, Milan Straka, Jan Hajič, Joakim Nivre, Filip Ginter, Juhani Luotolahti, Sampo Pyysalo, Slav Petrov,
  Martin Potthast, Francis Tyers, Elena Badmaeva, Memduh Gökırmak, Anna Nedoluzhko, Silvie Cinková, Jan Hajič jr., Jaroslava Hlaváčová,
  Václava Kettnerová, Zdeňka Urešová, Jenna Kanerva, Stina Ojala, Anna Missilä, Christopher Manning, Sebastian Schuster, Siva Reddy,
  Dima Taji, Nizar Habash, Herman Leung, Marie-Catherine de Marneffe, Manuela Sanguinetti, Maria Simi, Hiroshi Kanayama, Valeria de Paiva,
  Kira Droganova, Héctor Martínez Alonso, Çağrı Çöltekin, Umut Sulubacak, Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt,
  Kim Harris, Katrin Marheinecke, Georg Rehm, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit,
  Michael Mandl, Jesse Kirchner, Hector Fernandez Alcalde, Jana Strnadová, Esha Banerjee, Ruli Manurung, Antonio Stella, Atsuko Shimada,
  Sookyoung Kwak, Gustavo Mendonça, Tatiana Lando, Rattima Nitisaroj, Josie Li. 2017.
  [CoNLL 2017 Shared Task: Multilingual Parsing from Raw Text to Universal Dependencies](https://www.aclweb.org/anthology/K17-3001.pdf).
  In *Proceedings of the CoNLL 2017 Shared Task: Multilingual Parsing from Raw Text to Universal Dependencies*, pp. 1-19.

#### 2016

* Joakim Nivre, Marie-Catherine de Marneffe, Filip Ginter, Yoav Goldberg, Jan Hajič, Christopher D. Manning, Ryan McDonald, Slav Petrov, Sampo Pyysalo, Natalia Silveira, Reut Tsarfaty, Daniel Zeman. 2016. [Universal Dependencies v1: A Multilingual Treebank Collection](http://www.lrec-conf.org/proceedings/lrec2016/pdf/348_Paper.pdf). In *Proceedings of LREC*.

* Sebastian Schuster, Christopher D. Manning. 2016. [Enhanced English Universal Dependencies: An Improved Representation for Natural Language Understanding Tasks](http://www.lrec-conf.org/proceedings/lrec2016/pdf/779_Paper.pdf). In *Proceedings of LREC*.

#### 2015

* Richard Futrell, Kyle Mahowald, and Edward Gibson. 2015. [Large-scale evidence of dependency length minimization in 37 languages](https://www.pnas.org/doi/full/10.1073/pnas.1502134112). In _Proceedings of the National Academy of Sciences_ 112(33): 10336–10341.

#### 2014

* Marie-Catherine de Marneffe, Timothy Dozat, Natalia Silveira, Katri
  Haverinen, Filip Ginter, Joakim Nivre, and Christopher D. Manning. 2014.
  [Universal Stanford Dependencies: A cross-linguistic
  typology](http://nlp.stanford.edu/pubs/USD_LREC14_paper_camera_ready.pdf).
  In *Proceedings of LREC*.

* Rudolf Rosa, Jan Mašek, David Mareček, Martin Popel, Daniel Zeman, Zdeněk Žabokrtský. 2014.
  [HamleDT 2.0: Thirty Dependency Treebanks
  Stanfordized](http://www.lrec-conf.org/proceedings/lrec2014/pdf/915_Paper.pdf).
  In *Proceedings of LREC*.
  ([home page](http://ufal.mff.cuni.cz/hamledt))

* Daniel Zeman, Ondřej Dušek, David Mareček, Martin Popel, Loganathan Ramasamy,
  Jan Štěpánek, Zdeněk Žabokrtský, and Jan Hajič. 2014.
  [HamleDT: Harmonized multi-language dependency treebank](http://link.springer.com/article/10.1007/s10579-014-9275-2).
  In *Language Resources and Evaluation,* DOI 10.1007/s10579-014-9275-2.
  (Extended version of [paper from LREC 2012](http://www.lrec-conf.org/proceedings/lrec2012/pdf/429_Paper.pdf).)

#### 2013 and before

* Marie-Catherine de Marneffe, Bill MacCartney, and Christopher D. Manning. 2006.
  [Generating typed dependency parses from phrase structure parses](http://nlp.stanford.edu/pubs/LREC06_dependencies.pdf).
  In *Proceedings of LREC*.

* Marie-Catherine de Marneffe and Christopher D. Manning. 2008.
  [The Stanford typed dependencies representation](http://nlp.stanford.edu/pubs/dependencies-coling08.pdf).
  In *COLING Workshop on Cross-framework and Cross-domain Parser Evaluation*.

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

* Reut Tsarfaty. 2013.
  [A unified morpho-syntactic scheme of Stanford dependencies](http://www.tsarfaty.com/pdfs/acl13.pdf).
  In *Proceedings of ACL*.

* Daniel Zeman. 2008. [Reusable Tagset Conversion Using Tagset
  Drivers](http://lrec-conf.org/proceedings/lrec2008/pdf/66_paper.pdf).
  In *Proceedings of LREC*.
  ([home page](http://ufal.mff.cuni.cz/interset))


<!--
* Cristina Bosco, Simonetta Montemagni, Maria Simi. 2013.
  [Converting Italian treebanks: Towards an Italian Stanford dependency treebank](http://medialab.di.unipi.it/downloads/ISDT/MIDT-STD2013_law.pdf),
  In *7th Linguistic Annotation Workshop and Interoperability with Discourse*.

* Pi-Chuan Chang, Huihsin Tseng, Dan Jurafsky, and Christopher D. Manning. 2009.
  [Discriminative Reordering with Chinese Grammatical Relations Features](http://nlp.stanford.edu/pubs/ssst09-chang.pdf).
  In *Proceedings of the Third Workshop on Syntax and Structure in Statistical Translation*.

* Dipanjan Das, and Slav Petrov. 2011.
  [Unsupervised part-of-speech tagging with bilingual graph-based projections](http://static.googleusercontent.com/media/research.google.com/sv//pubs/archive/37071.pdf)
  In *Proceedings of ACL*.

* Katri Haverinen, Jenna Nyblom, Timo Viljanen, Veronika Laippala, Samuel Kohonen, Anna Missilä, Stina Ojala, Tapio Salakoski, and Filip Ginter. 2013.
  [Building the essential resources for Finnish: the Turku Dependency Treebank](http://dx.doi.org/10.1007/s10579-013-9244-1). Language Resources and Evaluation. Volume 48, Issue 3, pp 493-531.

* Janna Lipenkova and Milan Souček. 2014. [Converting Russian Dependency Treebank to Stanford Typed
Dependencies Representation](http://www.aclweb.org/anthology/E14-4028). In *Proceedings of the 14th Conference of the European Chapter of the Association for Computational Linguistics*, pp. 143-147.

* Teresa Lynn, Jennifer Foster, Mark Dras and Lamia Tounsi. 2014.
[Cross-lingual Transfer Parsing for Low-Resourced Languages: An Irish Case Study](https://www.aclweb.org/anthology/W14-4606/) In *Proceedings of the First Celtic Language Technology Workshop (CLTW 2014)*

* Marie-Catherine de Marneffe, Miriam Connor, Natalia Silveira, Samuel R. Bowman, Timothy Dozat, and Christopher D. Manning. 2013.
  [More constructions, more genres: extending Stanfod Dependencies](http://anthology.aclweb.org/W/W13/W13-3721.pdf).
  In *Proceedings of the Second International Conference on Dependency Linguistics (DepLing 2013)*.
  
* Ryan McDonald, and Joakim Nivre. 2007.
  [Characterizing the errors of data-driven dependency parsing models](http://www.aclweb.org/anthology/D/D07/D07-1013.pdf).
  In *Proceedings of EMNLP-CoNLL*.

* Mojgan Seraji, Carina Jahani, Beáta Megyesi, and Joakim Nivre. 2013.
  [A Persian treebank with Stanford typed dependencies](http://www.lrec-conf.org/proceedings/lrec2014/pdf/378_Paper.pdf).
  In *Proceedings of LREC*.

* Pavel Straňák, Jan Štěpánek. 2010.
  [Representing Layered and Structured Data in the CoNLL-ST Format](http://ufal.mff.cuni.cz/biblio/index.jsp?section=publication&id=5199616322962363209&mode=view). In *Proceedings of ICGL 2010*.

* Daniel Zeman, and Philip Resnik. 2008. [Cross-Language Parser Adaptation between Related
  Languages](http://ufal.mff.cuni.cz/~zeman/publikace/2008-01/padapt-hyderabad-05c-postfinal.pdf).
  In *Proceedings of IJCNLP 2008 Workshop on NLP for Less Privileged Languages*
-->
