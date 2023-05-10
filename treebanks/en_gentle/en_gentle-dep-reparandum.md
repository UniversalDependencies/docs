---
layout: base
title:  'Statistics of reparandum in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `reparandum`

This relation is universal.

22 nodes (0%) are attached to their parents as `reparandum`.

22 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.22727272727273.

The following 16 pairs of parts of speech are connected with `reparandum`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (3; 14% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (2; 9% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-ADV.html">ADV</a></tt> (2; 9% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-CCONJ.html">CCONJ</a></tt> (2; 9% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (2; 9% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-X.html">X</a></tt> (1; 5% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PART.html">PART</a></tt> (1; 5% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 reparandum	color:blue
1	Is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	reparandum	4:reparandum	Discourse=organization-phatic:160->161:0
2	there	there	PRON	EX	PronType=Dem	1	expl	1:expl	_
3	—	—	PUNCT	:	_	1	punct	1:punct	_
4	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Discourse=topic-question:161->166:1|XML=<hi rend:::"italic"></hi>
5	there	there	PRON	EX	PronType=Dem	4	expl	4:expl	_
6	balm	balm	NOUN	NN	Number=Sing	4	nsubj	4:nsubj	Entity=(118-substance-new-cf1-1-sgl)
7	in	in	ADP	IN	_	8	case	8:case	_
8	Gilead	Gilead	PROPN	NNP	Number=Sing	4	obl	4:obl:in	Entity=(119-place-new-cf2-1-sgl-Gilead)|SpaceAfter=No
9	?	?	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 12 reparandum	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	Discourse=evaluation-comment:29->17:2|Entity=(39-abstract-giv:act-cf1*-2-coref-Scudetto
2	Scudetto	Scudetto	PROPN	NNP	Number=Sing	4	nsubj	4:nsubj|7:nsubj:xsubj	Entity=39)
3	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux	4:aux	_
4	gon	go	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	XML=<w>
5	na	to	PART	TO	_	7	mark	7:mark	XML=</w>
6	be	be	AUX	VB	VerbForm=Inf	7	cop	7:cop	_
7	tough	tough	ADJ	JJ	Degree=Pos	4	xcomp	4:xcomp	_
8	all	all	DET	PDT	PronType=Tot	10	det:predet	10:det:predet	_
9	the	the	DET	DT	Definite=Def|PronType=Art	10	det	10:det	_
10	time	time	NOUN	NN	Number=Sing	7	obl:npmod	7:obl:npmod	_
11	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	12	nsubj	12:nsubj	Discourse=explanation-justify:30->29:0|Entity=(15-person-giv:inact-cf2-1-ana)
12	've	have	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	17	reparandum	17:reparandum	_
13	as	as	ADP	IN	_	17	reparandum	17:reparandum	_
14	just	just	ADV	RB	_	17	advmod	17:advmod	_
15	way	way	ADV	RB	Degree=Pos	16	advmod	16:advmod	_
16	too	too	ADV	RB	Degree=Pos	17	advmod	17:advmod	_
17	strong	strong	ADJ	JJ	Degree=Pos	4	parataxis	4:parataxis	SpaceAfter=No
18	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 reparandum	color:blue
1	How	how	ADV	WRB	PronType=Int	6	reparandum	6:reparandum	Discourse=restatement-repetition_m:84->83:0
2	...	…	PUNCT	:	_	1	punct	1:punct	_
3	what	what	PRON	WP	PronType=Int	5	reparandum	5:reparandum	Discourse=joint-sequence_m:85->62:0
4	sorry	sorry	ADJ	JJ	Degree=Pos	5	discourse	5:discourse	_
5	what	what	PRON	WP	PronType=Int	6	reparandum	6:reparandum	_
6	how	how	ADV	WRB	PronType=Int	7	advmod	7:advmod	_
7	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
8	there	there	PRON	EX	PronType=Dem	7	expl	7:expl	_
9	a	a	DET	DT	Definite=Ind|PronType=Art	10	det	10:det	Entity=(81-event-new-cf1-2-coref
10	penalty	penalty	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	Entity=81)
11	what	what	PRON	WP	PronType=Int	13	nsubj	13:nsubj	Discourse=restatement-partial:86->85:0
12	just	just	ADV	RB	_	13	advmod	13:advmod	_
13	happened	happen	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	parataxis	7:parataxis	SpaceAfter=No
14	?	?	PUNCT	.	_	7	punct	7:punct	_

~~~


