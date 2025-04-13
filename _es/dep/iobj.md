---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

UD reserves the relation `iobj` for the indirect object. However, this term is misleading, as the UD notion of
indirect object is not compatible with what is traditionally understood as indirect object in the Spanish grammar.
In UD the relation can be used only for core arguments. In Spanish, the recipient or beneficiary roles are
encoded either as a prepositional phrase with the preposition _a_ “to”, or as a dative pronoun. Both of these
strategies are oblique markings. Consequently, the corresponding nominals are not core arguments; they are oblique
dependents. To distinguish them from temporal and local adjuncts, we label them [obl:arg]().

While the relation `iobj` has no use in Spanish, it can occur in the Spanish data in case of code switching with
a language that has indirect objects, such as English:

~~~conllu
# text = la canción "Give 'em hell, kid"
# text_en = the song "Give 'em hell, kid"
1	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	Gloss=the
2	canción	canción	NOUN	_	Gender=Fem|Number=Sing	0	root	_	Gloss=song
3	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	Give	give	VERB	_	Foreign=Yes|Mood=Imp|VerbForm=Fin	2	appos	_	Lang=en
5	'	'	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	em	they	PRON	_	Case=Acc|Foreign=Yes|Number=Plur|Person=3|PronType=Prs	4	iobj	_	Lang=en
7	hell	hell	NOUN	_	Foreign=Yes|Number=Sing	4	obj	_	Lang=en|SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	kid	kid	NOUN	_	Foreign=Yes|Number=Sing	4	vocative	_	Lang=en|SpaceAfter=No
10	"	"	PUNCT	_	_	4	punct	_	_

~~~

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:58 CET -->
