---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
udver: '2'
---

The `parataxis` relation is a relation between a word (often the main predicate of a sentence) and other elements, such as a sentential parenthetical, placed side by side without any explicit coordination, subordination, or argument relation with the head word. 
Parataxis is a discourse-like equivalent of coordination.
In the LSE treebank, the parataxis relation is also used for reported speech or thoughs introduced by a noun or pronoun and typically accompanied of "constructed action".

~~~ conllu
# sent_id = HC-JRV#034
# text = HOMBR- CERDO SABER SABER INDX
# gloss_en = MAN- PIG KNOW KNOW INDX
# text_es = El cerdo (le responde): "Lo sé, lo sé.
# text_en = The pig (responds): "I know, I know.
1	HOMBR-	_	NOUN	N	_	2	reparandum	_	Gloss=MAN-
2	CERDO	_	NOUN	N	_	0	root	_	Gloss=PIG
3	SABER	_	VERB	V.P	_	2	parataxis	_	Gloss=KNOW
4	SABER	_	VERB	V.P	_	3	conj	_	Gloss=KNOW
5	INDX	_	PRON	Pro	_	3	nsubj	_	Gloss=INDX
~~~
