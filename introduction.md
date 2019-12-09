---
layout: base
title:  'Universal Dependencies'
udver: '2'
---

## Introduction

Universal Dependencies (UD) is a project that is developing cross-linguistically consistent treebank
annotation for many languages, with the goal of facilitating multilingual parser development,
cross-lingual learning, and parsing research from a language typology perspective. The annotation
scheme is based on an evolution of (universal) Stanford dependencies (de Marneffe et al., 2006, 2008, 2014), Google
universal part-of-speech tags (Petrov et al., 2012), and the Interset interlingua for
morphosyntactic tagsets (Zeman, 2008). The general philosophy is to provide a universal
inventory of categories and guidelines to facilitate consistent annotation of similar
constructions across languages, while allowing language-specific extensions when necessary.

This is illustrated in the following parallel examples from English, Bulgarian, Czech and Swedish,
where the main grammatical relations involving a passive verb, a nominal subject and an oblique agent
are the same, but where the concrete grammatical realization varies.

~~~ conllu
# visual-style 4 2 nsubj:pass	color:blue
# visual-style 4 7 obl	color:blue
1	The	the	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	dog	dog	NOUN	_	Gender=Neut|Number=Sing	4	nsubj:pass	_	_
3	was	be	AUX	_	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	chased	chase	VERB	_	Tense=Past|VerbForm=Part	0	ROOT	_	_
5	by	by	ADP	_	_	7	case	_	_
6	the	the	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	cat	cat	NOUN	_	Gender=Neut|Number=Sing	4	obl	_	_
8	.	.	PUNCT	_	_	4	punct	_	_

~~~

~~~ conllu
# visual-style 3 1 nsubj:pass	color:blue
# visual-style 3 5 obl	color:blue
1	Кучето	куче	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	3	nsubj:pass	_	_
2	се	се	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	3	expl:pass	_	_
3	преследваше	преследвам	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	от	от	ADP	_	_	5	case	_	_
5	котката	котка	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	3	obl	_	_
6	.	.	PUNCT	_	_	3	punct	_	_

~~~

~~~ conllu
# visual-style 3 1 nsubj:pass	color:blue
# visual-style 3 4 obl	color:blue
1	Pes	pes	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	byl	být	AUX	_	Aspect=Imp|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	3	aux:pass	_	_
3	honěn	honit	VERB	_	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
4	kočkou	kočka	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	3	obl	_	_
5	.	.	PUNCT	_	_	3	punct	_	_

~~~

~~~ conllu
# visual-style 2 1 nsubj:pass	color:blue
# visual-style 2 4 obl	color:blue
1	Hunden	hund	NOUN	_	Definite=Def	2	nsubj:pass	_	_
2	jagades	jaga	VERB	_	Tense=Past|Voice=Pass	0	root	_	_
3	av	av	ADP	_	_	4	case	_	_
4	katten	katt	NOUN	_	Definite=Def	2	obl	_	_
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


## What is needed for UD to be successful?

The secret to understanding the design and current success of UD is to realize that the design
is a very subtle compromise between approximately 6 things:

1. UD needs to be satisfactory on linguistic analysis grounds for individual languages.
2. UD needs to be good for linguistic typology, i.e., providing a suitable basis for bringing out cross-linguistic parallelism across languages and language families.
3. UD must be suitable for rapid, consistent annotation by a human annotator.
4. UD must be suitable for computer parsing with high accuracy.
5. UD must be easily comprehended and used by a non-linguist, whether a language learner or an engineer with prosaic needs for language processing. We refer to this as seeking a _habitable_ design, and it leads us to favor traditional grammar notions and terminology.
6. UD must support well downstream language understanding tasks (relation extraction, reading comprehension, machine translation, …).

It's easy to come up with a proposal that improves UD on one of these dimensions. The interesting and difficult part is to improve UD while remaining sensitive to all these dimensions.

## History

The Stanford dependencies were originally developed in 2005 as a backend to the Stanford parser
to help in Recognizing Textual Entailment systems,
then eventually emerged as the de facto standard for dependency analysis of English, and have since
been adapted to a number of different languages (Chang et al., 2009, Bosco et al., 2013, Haverinen et al., 2013,
Seraji et al., 2013, Tsarfaty, 2013, Lipenkova and Souček 2014).
The Google universal tag set grew out of the cross-linguistic error analysis based on the
CoNLL-X shared task data by McDonald and Nivre (2007), was initially used for unsupervised
part-of-speech tagging by Das and Petrov (2011), and has since been adopted as a widely used
standard for mapping diverse tagsets to a common standard.
The Interset (Zeman, 2008) started as a tool for conversion between morphosyntactic tagsets of multiple languages.
It dates back to 2006 when it was used in the first experiments with cross-lingual delexicalized parser adaptation
(Zeman and Resnik, 2008). It was later employed as the morphological layer in HamleDT (Zeman et al., 2014) –
a project that brings treebanks of many languages under a common annotation scheme.

The first attempt to combine Stanford dependencies and Google universal tags into a universal
annotation scheme was the Universal Dependency Treebank (UDT) project (McDonald et al., 2013),
which released treebanks for 6 languages in 2013 and 11 languages in 2014, and the first proposal
for incorporating morphology was made by Tsarfaty (2013). The second version of HamleDT (Rosa et al., 2014)
provided Stanford/Google annotation for 30 languages in 2014. This was followed by the development of
universal Stanford dependencies (USD) (de Marneffe et al., 2014).
The new Universal Dependencies is the result of merging all these initiatives into a single coherent framework,
based on universal Stanford dependencies, an extended version of the Google universal tagset, a revised
subset of the Interset feature inventory, and a revised version of the CoNLL-X format (called CoNLL-U).

The first version of the new guidelines, released in October 2014, introduced a somewhat extended universal
part-of-speech tag set. This set makes some distinctions that were missing in the original proposal, but
were perceived to be of importance by many, and clarifies the definition of categories. As a result of this work,
universal POS categories have substantive definitions and are not necessarily just equivalence classes
of categories in underlying language-particular treebanks. Hence, work to convert to UD POS tags often
requires context-sensitive rules, or some hand correction. The UD morphological features aim to provide a
stripped down basic set of features which are most crucial for analysis and are widespread across languages.
The dependency representation of UD evolves out of Stanford Dependencies (SD), which itself follows ideas
of grammatical relations-focused description that can be found in many linguistic frameworks. That is,
it is centrally organized around notions of subject, object, clausal complement, noun determiner, noun modifier, etc.
The goal of the new universal version was to add or refine relations to better accommodate the grammatical structures of typologically different languages and to clean up some of the quirkier and more English-specific features of the original version. Hence, the new taxonomy has _less_ relations than the original SD.

## Project organization

UD is an open collaboration with many project members. The administrative structure is kept at a minimum and currently consists of the following:

* The project is coordinated by Joakim Nivre (aka chief cat herder).
* Releases (including validation and documentation) are managed by Filip Ginter, Sampo Pyysalo and Dan Zeman.
* Universal guidelines are managed by a small group of core members, currently consisting of Marie de Marneffe, Filip Ginter, Yoav Goldberg, Jan Hajič, Chris Manning, Ryan McDonald, Joakim Nivre, Slav Petrov, Sampo Pyysalo, Sebastian Schuster, Natalia Silveira, Reut Tsarfaty, Fran Tyers and Dan Zeman.
* Language-specific guidelines and treebanks are maintained by each specific language team.
* Issues are raised on GitHub and resolved through discussion and voting.

[List of contributors](contributors.html)

## UD-related publications

### 2019

* [_Proceedings of the Third Workshop on Universal Dependencies_](https://www.aclweb.org/anthology/W19-80.pdf), UDW 2019, SyntaxFest, Paris.

* Kira Droganova, Daniel Zeman. 2019.
  [Towards Deep Universal Dependencies](https://www.aclweb.org/anthology/W19-7717.pdf).
  In *Proceedings of the Fifth International Conference on Dependency Linguistics (Depling, Syntaxfest 2019)*, pp. 144-152.

* Kim Gerdes, Bruno Guillaume, Sylvain Kahane, Guy Perrier. 2019. [Improving Surface-syntactic Universal Dependencies (SUD): surface-syntactic functions and deep-syntactic features](https://www.aclweb.org/anthology/W19-7814.pdf), _Proceedings of the 17th international conference on Treebanks and Linguistic Theories (TLT)_, SyntaxFest, Paris.

### 2018

* [_Proceedings of the Second Workshop on Universal Dependencies_](https://www.aclweb.org/anthology/W18-6000.pdf), UDW 2018, EMNLP,Brussels.

* Puneet Dwivedi, Daniel Zeman. 2018.
  [The Forest Lion and the Bull: Morphosyntactic Annotation of the Panchatantra](http://ufal.mff.cuni.cz/biblio/attachments/2018-zeman-p1924099829345317043.pdf).
  In: Computación y Sistemas, ISSN 1405-5546, vol. 22, no. 4, pp. 1377-1384.

* Sonja Marković, Daniel Zeman. 2018.
  [Reflexives in Universal Dependencies](http://www.ep.liu.se/ecp/155/ecp18155.pdf#page=139).
  In *Proceedings of the 17th International Workshop on Treebanks and Linguistic Theories (TLT 2018)*, pp. 131-146.

* Agnieszka Patejuk and Adam Przepiórkowski. 2018. [*From Lexical Functional Grammar to Enhanced Universal Dependencies: Linguistically informed treebanks of Polish*](http://nlp.ipipan.waw.pl/Bib/pat:prz:18:book.pdf). Institute of Computer Science, Polish Academy of Sciences, Warsaw. (263 pages)

* Lauma Pretkalniņa, Laura Rituma and Baiba Saulīte. 2018. [Deriving Enhanced Universal Dependencies from a Hybrid Dependency-Constituency Treebank](https://www.researchgate.net/publication/327520269). In *Text, Speech, and Dialogue*, vol. 11107, pp. 95-105.

* Adam Przepiórkowski and Agnieszka Patejuk. 2018. [Arguments and adjuncts in Universal Dependencies](http://aclweb.org/anthology/C18-1324). In *Proceedings of the 27th International Conference on Computational Linguistics (COLING 2018)*, pages 3837–3852, Santa Fe, NM.

* Sylvain Kahane, Marine Courtin, Kim Gerdes. 2018. [Multi-word annotation in syntactic treebanks: Propositions for Universal Dependencies](https://www.aclweb.org/anthology/W17-7622.pdff), _Proceedings of the 16th international conference on Treebanks and Linguistic Theories (TLT)_, Prague.

* Daniel Zeman. 2018.
  [The World of Tokens, Tags and Trees](https://ufal.mff.cuni.cz/books/2018-zeman).
  ISBN 978-80-88132-09-7.

* Daniel Zeman, Jan Hajič, Martin Popel, Martin Potthast, Milan Straka, Filip Ginter, Joakim Nivre, Slav Petrov. 2018.
  [CoNLL 2018 Shared Task: Multilingual Parsing from Raw Text to Universal Dependencies](http://universaldependencies.org/conll18/proceedings/pdf/K18-2001.pdf).
  In *Proceedings of the CoNLL 2018 Shared Task: Multilingual Parsing from Raw Text to Universal Dependencies*, pp. 1-21.

### 2017

* [_Proceedings of the First Workshop on Universal Dependencies_](https://www.aclweb.org/anthology/W17-0400.pdf), UDW 2017, NoDaLiDa, Gothenburg.

* Joakim Nivre, Daniel Zeman, Filip Ginter, Francis Tyers. 2017.
  [EACL tutorial on Universal Dependencies](http://universaldependencies.org/eacl17tutorial/).

* Tanja Samardžić, Mirjana Starović, Željko Agić, Nikola Ljubešić. 2017. [Universal Dependencies for Serbian in Comparison with Croatian and Other Slavic Languages](https://www.aclweb.org/anthology/W17-1407.pdf). In: *Proceedings of BSNLP* 2017, Valencia, Spain.

* Dima Taji, Nizar Habash, Daniel Zeman. 2017.
  [Universal Dependencies for Arabic](https://www.aclweb.org/anthology/W17-1320/).
  In *Proceedings of the Third Arabic Natural Language Processing Workshop (WANLP)*, pp. 166-176.

* Daniel Zeman. 2017.
  [Core Arguments in Universal Dependencies](http://www.ep.liu.se/ecp/139/ecp17139.pdf#page=297).
  In *Proceedings of the Fourth International Conference on Dependency Linguistics (Depling 2017).*

* Daniel Zeman. 2017.
  [Slovak Dependency Treebank in Universal Dependencies](http://ufal.mff.cuni.cz/biblio/attachments/2017-zeman-m616715454987255391.pdf).
  In *Jazykovedný časopis / Journal of Linguistics*, ISSN 0021-5597, vol. 68, no. 2, pp. 385-395.

* Daniel Zeman, Martin Popel, Milan Straka, Jan Hajič, Joakim Nivre, Filip Ginter, Juhani Luotolahti, Sampo Pyysalo, Slav Petrov,
  Martin Potthast, Francis Tyers, Elena Badmaeva, Memduh Gökırmak, Anna Nedoluzhko, Silvie Cinková, Jan Hajič, jr., Jaroslava Hlaváčová,
  Václava Kettnerová, Zdeňka Urešová, Jenna Kanerva, Stina Ojala, Anna Missilä, Christopher Manning, Sebastian Schuster, Siva Reddy,
  Dima Taji, Nizar Habash, Herman Leung, Marie-Catherine de Marneffe, Manuela Sanguinetti, Maria Simi, Hiroshi Kanayama, Valeria de Paiva,
  Kira Droganova, Héctor Martínez Alonso, Çağrı Çöltekin, Umut Sulubacak, Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt,
  Kim Harris, Katrin Marheinecke, Georg Rehm, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit,
  Michael Mandl, Jesse Kirchner, Hector Fernandez Alcalde, Jana Strnadová, Esha Banerjee, Ruli Manurung, Antonio Stella, Atsuko Shimada,
  Sookyoung Kwak, Gustavo Mendonça, Tatiana Lando, Rattima Nitisaroj, Josie Li. 2017.
  [CoNLL 2017 Shared Task: Multilingual Parsing from Raw Text to Universal Dependencies](https://www.aclweb.org/anthology/K17-3001.pdf).
  In *Proceedings of the CoNLL 2017 Shared Task: Multilingual Parsing from Raw Text to Universal Dependencies*, pp. 1-19.

### 2016

* Héctor Martínez Alonso, Daniel Zeman. 2016.
  [Universal Dependencies for the AnCora treebanks](http://journal.sepln.org/sepln/ojs/ojs/index.php/pln/article/view/5341).
  In *Procesamiento del Lenguaje Natural*, ISSN 1135-5948, 57, pp. 91-98.

* Joakim Nivre, Marie-Catherine de Marneffe, Filip Ginter, Yoav Goldberg, Jan Hajič, Christopher D. Manning, Ryan McDonald, Slav Petrov, Sampo Pyysalo, Natalia Silveira, Reut Tsarfaty, Daniel Zeman. 2016. [Universal Dependencies v1: A Multilingual Treebank Collection](http://www.lrec-conf.org/proceedings/lrec2016/pdf/348_Paper.pdf). In *Proceedings of LREC*.

* Sebastian Schuster, Christopher D. Manning. 2016. [Enhanced English Universal Dependencies: An Improved Representation for Natural Language Understanding Tasks](http://www.lrec-conf.org/proceedings/lrec2016/pdf/779_Paper.pdf). In *Proceedings of LREC*.

* Mojgan Seraji, Filip Ginter, Joakim Nivre. 2016. [Universal Dependencies for Persian](http://www.lrec-conf.org/proceedings/lrec2016/pdf/697_Paper.pdf). In *Proceedings of LREC*, pages 2361-2365.

* Daniel Zeman. 2016.
  [Universal Annotation of Slavic Verb Forms](http://ufal.mff.cuni.cz/pbml/105/art-zeman.pdf).
  In *The Prague Bulletin of Mathematical Linguistics*, ISSN 0032-6585, 105, pp. 143-193.

### 2015

* Željko Agić, Nikola Ljubešić. 2015. [Universal Dependencies for Croatian (that Work for Serbian, too)](https://www.aclweb.org/anthology/W15-5301.pdf), In: *Proceedings of BSNLP* 2015, Hissar, Bulgaria.

* Kim Gerdes, Sylvain Kahane. 2015. [Non-constituent coordination and other coordinative constructions as dependency graphs](https://www.aclweb.org/anthology/W15-2113.pdf), _Proceedings of the 3rd international conference on Dependency Linguistics (Depling)_, Uppsala.

* Joakim Nivre. 2015. Towards a Universal Grammar for Natural Language Processing. *Computational Linguistics and Intelligent Text Processing*.

* Petya Osenova and Kiril Simov. 2015. [Universalizing BulTreeBank: a Linguistic Tale about Glocalization](http://www.aclweb.org/anthology/W/W15/W15-5313.pdf). In: *Proceedings of BSNLP* 2015, Hissar, Bulgaria, pp. 81–89.

* Sampo Pyysalo, Jenna Kanerva, Anna Missilä, Veronika Laippala, and Filip Ginter. 2015. [Universal Dependencies for Finnish](http://www.aclweb.org/anthology/W/W15/W15-1821.pdf). In *Proceedings of Nodalida 2015*.

* Daniel Zeman. 2015. [Slavic Languages in Universal Dependencies](http://ufal.mff.cuni.cz/biblio/?section=publication&id=-1745977273001647149&mode=view). In *Slovko 2015: Natural Language Processing, Corpus Linguistics, E-learning*. Bratislava, Slovakia. [PDF](http://ufal.mff.cuni.cz/biblio/servlet/File?timestamp=1441201812368&id=4326707699154676324&field=File)

### 2014

* Joakim Nivre. 2014. [Universal Dependencies for Swedish](http://www2.lingfil.uu.se/SLTC2014/abstracts/sltc2014_submission_7.pdf).
  In [*SLTC 2014*](http://www2.lingfil.uu.se/SLTC2014/).

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

### 2013 and before

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

* Marie-Catherine de Marneffe, Miriam Connor, Natalia Silveira, Samuel R. Bowman, Timothy Dozat, and Christopher D. Manning. 2013.
  [More constructions, more genres: extending Stanfod Dependencies](http://anthology.aclweb.org/W/W13/W13-3721.pdf).
  In *Proceedings of the Second International Conference on Dependency Linguistics (DepLing 2013)*.

* Marie-Catherine de Marneffe, Timothy Dozat, Natalia Silveira, Katri
  Haverinen, Filip Ginter, Joakim Nivre, and Christopher D. Manning. 2014.
  [Universal Stanford Dependencies: A cross-linguistic
  typology](http://nlp.stanford.edu/pubs/USD_LREC14_paper_camera_ready.pdf).
  In *Proceedings of LREC*.

* Marie-Catherine de Marneffe, Bill MacCartney, and Christopher D. Manning. 2006.
  [Generating typed dependency parses from phrase structure parses](http://nlp.stanford.edu/pubs/LREC06_dependencies.pdf).
  In *Proceedings of LREC*.

* Marie-Catherine de Marneffe and Christopher D. Manning. 2008.
  [The Stanford typed dependencies representation](http://nlp.stanford.edu/pubs/dependencies-coling08.pdf).
  In *COLING Workshop on Cross-framework and Cross-domain Parser Evaluation*.

* Ryan McDonald, and Joakim Nivre. 2007.
  [Characterizing the errors of data-driven dependency parsing models](http://www.aclweb.org/anthology/D/D07/D07-1013.pdf).
  In *Proceedings of EMNLP-CoNLL*.

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

* Mojgan Seraji, Carina Jahani, Beáta Megyesi, and Joakim Nivre. 2013.
  [A Persian treebank with Stanford typed dependencies](http://www.lrec-conf.org/proceedings/lrec2014/pdf/378_Paper.pdf).
  In *Proceedings of LREC*.

* Pavel Straňák, Jan Štěpánek. 2010.
  [Representing Layered and Structured Data in the CoNLL-ST Format](http://ufal.mff.cuni.cz/biblio/index.jsp?section=publication&id=5199616322962363209&mode=view). In *Proceedings of ICGL 2010*.

* Reut Tsarfaty. 2013.
  [A unified morpho-syntactic scheme of Stanford dependencies](http://www.tsarfaty.com/pdfs/acl13.pdf).
  In *Proceedings of ACL*.

* Daniel Zeman. 2008. [Reusable Tagset Conversion Using Tagset
  Drivers](http://lrec-conf.org/proceedings/lrec2008/pdf/66_paper.pdf).
  In *Proceedings of LREC*.
  ([home page](http://ufal.mff.cuni.cz/interset))

* Daniel Zeman, and Philip Resnik. 2008. [Cross-Language Parser Adaptation between Related
  Languages](http://ufal.mff.cuni.cz/~zeman/publikace/2008-01/padapt-hyderabad-05c-postfinal.pdf).
  In *Proceedings of IJCNLP 2008 Workshop on NLP for Less Privileged Languages*
