---
layout: base
title:  'Statistics of goeswith in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `goeswith`

This relation is universal.

4 nodes (0%) are attached to their parents as `goeswith`.

4 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `goeswith`: <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-X.html">X</a></tt> (2; 50% instances), <tt><a href="en_gentle-pos-DET.html">DET</a></tt>-<tt><a href="en_gentle-pos-X.html">X</a></tt> (1; 25% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-X.html">X</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 goeswith	color:blue
1	So	so	INTJ	UH	_	5	discourse	5:discourse	Discourse=evaluation-comment:43->40:3:_
2	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	5:nsubj	Entity=(1-person-giv:act-cf1*-1-ana)
3	will	will	AUX	MD	VerbForm=Fin	5	aux	5:aux	_
4	be	be	AUX	VB	VerbForm=Inf	5	cop	5:cop	_
5	better	good	ADJ	JJR	Degree=Cmp	0	root	0:root	MSeg=bett-er
6	off	off	ADP	RP	_	5	compound:prt	5:compound:prt	_
7	or	or	CCONJ	CC	_	10	cc	10:cc	Discourse=adversative-antithesis:44->43:0:_
8	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	10:nsubj	Entity=(7-person-giv:act-cf2-1-ana)
9	will	will	AUX	MD	VerbForm=Fin	10	aux	10:aux	_
10	do	do	VERB	VB	VerbForm=Inf	5	conj	5:conj:or	_
11	what	whatever	PRON	GW	Typo=Yes	10	obj	10:obj	CorrectForm=whatever|Entity=(31-abstract-new-cf5-6-sgl|XML=<sic ana:::"whatever">
12	ever	_	X	WP	_	11	goeswith	11:goeswith	CorrectForm=_|XML=</sic>
13	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	nsubj	14:nsubj	Entity=(32-event-new-cf4-1-cata)
14	takes	take	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	11:acl:relcl	MSeg=take-s
15	to	to	PART	TO	_	16	mark	16:mark	Discourse=purpose-goal:45->44:0:_|Entity=(32-event-acc:com-cf4-2-coref
16	have	have	VERB	VB	VerbForm=Inf	10	advcl	10:advcl:to	_
17	you	you	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	16	obj	16:obj|19:nsubj:xsubj	Entity=(1-person-giv:act-cf1*-1-ana)
18	in	in	ADP	IN	_	19	case	19:case	_
19	jail	jail	NOUN	NN	Number=Sing	16	xcomp	16:xcomp	Entity=(16-place-giv:inact-cf3-1-coref-Prison)
20	like	like	ADP	IN	_	21	case	21:case	_
21	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	16	obl	16:obl:like	Entity=(7-person-giv:act-cf2-1-ana)32)31)|SpaceAfter=No
22	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 goeswith	color:blue
1	Ball	Ball	NOUN	NN	Number=Sing	3	nsubj:pass	3:nsubj:pass	Discourse=joint-sequence_m:90->62:0:_|Entity=(69-object-giv:inact-cf3-1-coref)
2	gets	get	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	3:aux:pass	MSeg=get-s
3	played	play	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	MSeg=play-ed
4	in	in	ADV	RB	Degree=Pos	3	advmod	3:advmod	_
5	uh	uh	INTJ	UH	_	10	discourse	10:discourse	Discourse=joint-sequence_m:91->62:0:_
6	all	all	DET	GW	PronType=Tot|Typo=Yes	10	discourse	10:discourse	_
7	right	_	X	DT	_	6	goeswith	6:goeswith	_
8	apparently	apparently	ADV	RB	Degree=Pos	10	advmod	10:advmod	MSeg=apparent-ly
9	Alderweireld	Alderweireld	PROPN	NNP	Number=Sing	10	nsubj	10:nsubj	Entity=(57-person-giv:inact-cf2-1-coref-Toby_Alderweireld)
10	clipped	clip	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	parataxis	3:parataxis	MSeg=clipp-ed
11	Favilli	Favilli	PROPN	NNP	Number=Sing	10	obj	10:obj	Entity=(80-person-giv:act-cf1*-1-coref)|SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Be	beware	VERB	GW	Typo=Yes	0	root	0:root	CorrectForm=Beware|Discourse=evaluation-comment:47->46:2:_|XML=<sic ana:::"Beware">
2	ware	_	X	VB	_	1	goeswith	1:goeswith	CorrectForm=_|XML=</sic>
3	Of	of	ADP	IN	_	5	case	5:case	_
4	All	all	DET	DT	PronType=Ind	5	det	5:det	Entity=(53-abstract-new-cf1-2-sgl
5	Actions	action	NOUN	NNS	Number=Plur	1	obl	1:obl:of	Entity=53)
6	South	South	PROPN	NNP	Number=Sing	7	compound	7:compound	Discourse=evaluation-comment:48->46:3:_|Entity=(54-person-new-cf2-1,2,3-sgl-White_South_Africans
7	Africanner	African	ADJ	NNP	Degree=Cmp|Typo=Yes	8	compound	8:compound	CorrectForm=African|MSeg=Afric-ann-er|XML=<sic ana:::"African"></sic>
8	Europeans	European	PROPN	NNPS	Number=Plur	5	compound	5:compound	Entity=54)|MSeg=Europe-an-s

~~~


