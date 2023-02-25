---
layout: relation
title:  'compound:prt'
shortdef : 'preverbs'
udver: '2'
---

The subtype `compound:prt` is used in Old Irish UD treebanks to express the relation between preverbs and the remaining portion of a compound verb, where the preverb is considered an integral part of the verb expression. The governor of the dependency is the verb, and the dependent is the preverb.

### Example

~~~ sdparse
# sent_id = 2
# reference = 1a2
# scribe = Main Glossator
# text = .i. at tá di ṡeirc la laitnori inna grec co seichetar ci d a comroicniu
# translation = i.e. it is for love of the Greeks by the Latinists that they follow even their errors
1	.i.	.i.	ADV	_	Abbr=Yes	3	advmod	_	_
2	at	ad	PART	_	PartType=Vb	3	compound:prt	_	_
3	tá	attá	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
4	di	de	ADP	_	AdpType=Prep|Definite=Ind	5	case	_	_
5	ṡeirc	serc	NOUN	_	Case=Dat|Number=Sing	3	obl	_	_
6	la	la	ADP	_	AdpType=Prep|Definite=Ind	7	case	_	_
7	laitnori	laitneóir	NOUN	_	Case=Acc|Number=Plur	5	nmod	_	_
8	inna	in	DET	_	Case=Gen|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	grec	gréc	NOUN	_	Case=Gen|Number=Plur	5	nmod	_	_
10	co	co	SCONJ	_	_	11	mark	_	_
11	seichetar	sechithir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	3	ccomp	_	_
12	ci	cía	SCONJ	_	_	15	mark	_	_
13	d	is	AUX	_	Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	15	aux:pass	_	_
14	a	a	PRON	_	Number=Plur|Person=3|Poss=Yes|PronType=Prs	15	nmod:poss	_	_
15	comroicniu	comrorcun	NOUN	_	Case=Acc|Number=Plur	11	obj	_	_

~~~

### Further Examples

* _<b>as</b>beir_  "he speaks/says"
* _<b>ad</b>cí_  "he sees"
* _<b>do</b>beir_  "he gives"
* _<b>fo</b>gaib_  "he finds"
