---
layout: base
title:  'Universal Dependencies: Short Introduction'
udver: '2'
---

## Introduction

The Universal Dependencies (UD) project develops treebanks, collections of sentences annotated for word morphology and sentence syntax, for many languages. It seeks to build cross-linguistically consistent treebanks, with the goal of facilitating multilingual parser development,
language analysis, psycholinguistics, and language typology.
After over a decade of development, UD provides treebanks and annotation guidelines (of varying size and quality) for nearly 200 human languages. While there is much more to do to improve the quality and typological distribution of resources available, UD provides by far the largest body of consistently annotated morphosyntactic data for a large range of human languages. UD is an open community effort and we encourage anyone interested to contribute to it!

The general philosophy of UD is to propose a universal inventory of categories and guidelines to facilitate consistent annotation of similar constructions across languages, while allowing for typological differences and using language-specific extensions when necessary. This is illustrated in the following parallel examples from English, Bulgarian, Czech, Swedish, and Kʼicheʼ. The main grammatical relations shown in blue (involving a passive verb, a nominal subject and an oblique agent) are the same, but the concrete grammatical realization varies.

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

~~~ conllu
# visual-style 1 3 nsubj:pass	color:blue
# visual-style 1 6 obl	color:blue
1	Koqatax	_	VERB	_	_	0	root	_	_
2	ri	_	DET	_	Definite=Def	3	det	_	_
3	tz'i'	_	NOUN	_	_	1	nsubj:pass	_	_
4	kumal	_	NOUN	_	_	6	case	_	_
5	ri	_	DET	_	Definite=Def	6	det	_	_
6	me's	_	NOUN	_	_	1	obl	_	_
7	.	.	PUNCT	_	_	1	punct	_	_

~~~

UD adopts a dependency representation of syntax, marking dependents of head words, and organizes sentence analysis around identifying clauses, nominals, and modifiers of these. It is a lexicalist framework that differentiates morphology from syntax, and it emphasizes dependencies between content words to increase crosslinguistic parallelism.

The best introduction to the design of UD as a linguistic framework is [de Marneffe et al. (2021)](https://direct.mit.edu/coli/article/47/2/255/98516/Universal-Dependencies). UD has been crafted to strike a delicate balance between approximately 6 dimensions:

1. UD needs to be satisfactory on linguistic analysis grounds for _individual languages_.
2. UD needs to be good for linguistic typology, i.e., providing a suitable basis for bringing out _cross-linguistic parallelism_ across languages and language families.
3. UD must be suitable for rapid, consistent _annotation_ by a human annotator.
4. UD must be _easily comprehended and used_ by a non-linguist, whether a language learner or an engineer with prosaic needs for language processing. We refer to this as seeking a _habitable_ design, and it leads us to favor traditional grammar notions and terminology.
5. UD must be suitable for computer _parsing_ with high accuracy.
6. UD must support _downstream language understanding_ tasks (relation extraction, reading comprehension, machine translation, …).

It's easy to come up with a proposal that improves UD on one of these dimensions. The interesting and difficult part is to improve UD while remaining sensitive to all these dimensions.

## Getting started using UD

On a practical level, the UD project specifies common data formats and maintains infrastructure for treebanks:

- The [UD annotation guidelines](guidelines.html) specify inventories of part-of-speech tags, morphological features, and syntactic dependency relations. Each of these labels has a project-wide (“universal”, or “u” for short) documentation page, as well as some documentation pages customized for individual languages, e.g., [u-dep/nsubj]() for nominal subjects.  Links to switch between language-specific and universal pages appear at the bottom. UD data is stored in the [CoNLL-U format](format.html), a text-based format conducive to computational processing. 
- The [homepage](index.html) lists languages and treebanks that have been contributed to the project. Many treebanks have been converted (with some level of noise) from other frameworks; some have been annotated in UD directly. Treebanks are minimally required to conform to the UD technical standard as enforced by [the validator script](contributing/validation.html), and to specify an open license (most data has a Creative Commons license). The data for each treebank lives in its own GitHub repository. Twice a year, a bundle of all the conformant treebanks is [released](https://universaldependencies.org/download.html).
- UD welcomes [contributions](contribute.html) of new treebanks/languages as well as improvements to the existing data and guidelines/documentation.
- Most people start either by downloading some treebanks or by using some of the various [tools](tools.html) that have been developed, for visualizing, searching, and processing treebanks or for annotating (“parsing”) human language text with UD analyses. Recommended starting tools are [ArboratorGrew](https://arborator.grew.fr/) for querying existing treebanks and hand-annotating new data, [Stanza](https://stanfordnlp.github.io/stanza/) or [UDPipe](http://ufal.mff.cuni.cz/udpipe) for automatically parsing plain text into UD format, and [conllu](https://pypi.org/project/conllu/) for simple Python code for reading and writing CoNLL-U format.






## Project organization

UD is an open collaboration with many project members. The administrative structure is kept to a minimum and currently consists of the following:

* The project is coordinated by Joakim Nivre (aka chief cat herder).
* Releases (including validation and documentation) are managed by Dan Zeman.
* Universal guidelines are managed by a small group of core members, currently (since 2022) consisting of Marie-Catherine de Marneffe, Chris Manning, Lori Levin, Joakim Nivre, Nathan Schneider, Francis Tyers, Amir Zeldes and Dan Zeman.
* Language-specific guidelines and treebanks are maintained by each specific language team.
* Issues are raised on GitHub and resolved through discussion and voting among the core members.

[List of contributors](contributors.html)

## History and publications

- [History of the UD project](history.html)
