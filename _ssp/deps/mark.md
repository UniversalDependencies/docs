---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---

A marker is the word introducing a clause subordinate to another clause. The marker is a dependent of the subordinate clause head. Most LSE markers are signs that were in origin nouns, like MOTIVO and OBJETIVO, and are used as conectors between verbal items.

~~~ conllu
# sent_id = HC-JRV#080
# text = INDX.PRO:1sg PROPIO CASA ROMPER cl.e:CASA-desintegrarse MOTIVO LOBO SOPLAR
# gloss_en = INDX.PRO:1sg MINE HOME BREAK cl CAUSE WOLF BLOW
# text_es = mi casa se ha roto, ha volado por el soplido del lobo.
# text_en = My house has been blown down by the wolf.
1	INDX.PRO:1sg	_	DET	Pro	_	3	det	_	Gloss=INDX.PRO:1sg
2	PROPIO	_	DET	Det	_	3	det	_	Gloss=MINE
3	CASA	_	NOUN	N	_	4	nsubj	_	Gloss=HOME
4	ROMPER	_	VERB	V	_	0	root	_	Gloss=BREAK
5	cl.e:CASA-desintegrarse	_	VERB	V.D	_	4	compound:svc	_	Gloss=cl
6	MOTIVO	_	SCONJ	Conj	_	8	mark	_	Gloss=CAUSE
7	LOBO	_	NOUN	N	_	8	nsubj	_	Gloss=WOLF
8	SOPLAR	_	VERB	V	_	4	advcl	_	Gloss=BLOW
~~~
