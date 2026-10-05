---
layout: relation
title: 'parataxis:restart'
shortdef: 'restart'
udver: '2'
---

The specialization is used in KIParla, a corpus of spoken Italian, when the speaker abandons a construction and restarts it. The head of the restarted material is attached to the head of the abandoned construction. The abandoned part is kept in the tree and the restart is not syntactically integrated into it. It differs from [reparandum](), which marks a single repaired word or phrase, and from [parataxis:parenth](parataxis-parenth), where the main clause continues after the inserted material.

~~~ conllu
# text = io ho da verb~ dovrei riuscire
1	io	io	PRON	_	_	2	nsubj	_	_
2	ho	avere	VERB	_	_	0	root	_	_
3	da	da	ADP	_	_	4	mark	_	_
4	verb~	verb~	X	_	_	2	xcomp	_	Interrupted=Yes
5	dovrei	dovere	AUX	_	_	6	aux	_	_
6	riuscire	riuscire	VERB	_	_	2	parataxis:restart	_	_
~~~
