---
layout: relation
title:  'compound:redup'
shortdef : 'reduplicated compounds'
udver: '2'
---

The compound:redup relation is used for reduplicated compounds. There is a reduplication when a token is followed by one or several occurrences of the same token.

~~~ conllu
# sent_id = HC-JRV#107
# text = CASA- COSTAR COSTAR
# gloss_en = HOME- COST COST
# text_es = "Cas.. Cuesta, cuesta,
# text_en = "Almost.. Its tough, tough,
1	CASA-	_	NOUN	N	_	2	reparandum	_	Gloss=HOME-
2	COSTAR	_	VERB	V	_	0	root	_	Gloss=COST
3	COSTAR	_	VERB	V	_	2	compound:redup	_	Gloss=COST
~~~
