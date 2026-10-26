---
layout: relation
title: 'obl:arg'
shortdef: 'oblique argument'
udver: '2'
---

The `obl:arg` relation is used for oblique nominal arguments selected by a verb or adjective. This includes oblique arguments introduced by causative and permissive constructions.

In _a l’à parlou de politica inte unn’intervista_ “she spoke about politics in an interview”, _de politica_ specifies the topic and takes `obl:arg`, whereas _inte unn’intervista_ gives the setting and takes [obl]():

~~~ conllu
1	a	o	PRON	_	_	4	nsubj	_	Gloss=she
2	l’	l'	PART	_	_	4	dep	_	SpaceAfter=No
3	à	avei	AUX	_	_	4	aux	_	Gloss=has
4	parlou	parlâ	VERB	_	_	0	root	_	Gloss=spoken
5	de	de	ADP	_	_	6	case	_	Gloss=about
6	politica	politica	NOUN	_	_	4	obl:arg	_	Gloss=politics
7	inte	inte	ADP	_	_	9	case	_	Gloss=in
8	unn’	un	DET	_	_	9	det	_	Gloss=an|SpaceAfter=No
9	intervista	intervista	NOUN	_	_	4	obl	_	Gloss=interview

~~~

<a id="adjectival-complement"></a>

Adjectives also take oblique arguments, as in _piñe d’ægua_ “full of water”:

~~~ conllu
1	case	casa	NOUN	_	_	0	root	_	Gloss=houses
2	piñe	pin	ADJ	_	_	1	amod	_	Gloss=full
3	d’	de	ADP	_	_	4	case	_	Gloss=of|SpaceAfter=No
4	ægua	ægua	NOUN	_	_	2	obl:arg	_	Gloss=water

~~~

For an agent attached to a passive participle, see the example under [obl:agent](obl-agent.html#passive-participle).

Oblique modifiers take [obl](). Passive agents take [obl:agent](), and dative clitic arguments take [iobj]().
