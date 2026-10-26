---
layout: base
title:  'Statistics of compound:lvc in UD_Uzbek-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-TueCL: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="uz_tuecl-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="uz_tuecl-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="uz_tuecl-dep-compound-svc.html">compound:svc</a></tt>.

15 nodes (2%) are attached to their parents as `compound:lvc`.

15 instances of `compound:lvc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_tuecl-pos-NOUN.html">NOUN</a></tt> (8; 53% instances), <tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_tuecl-pos-ADJ.html">ADJ</a></tt> (4; 27% instances), <tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_tuecl-pos-PART.html">PART</a></tt> (2; 13% instances), <tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_tuecl-pos-ADV.html">ADV</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound:lvc	color:blue
1	U	u	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
2	chekish	chek	VERB	_	Case=Nom|VerbForm=Vnoun	5	xcomp	_	_
3	va	va	CCONJ	_	_	4	cc	_	_
4	ichishni	ich	VERB	_	Case=Acc|VerbForm=Vnoun	2	conj	_	_
5	tashlashga	tashla	VERB	_	Case=Dat|VerbForm=Vnoun	6	xcomp	_	_
6	harakat	harakat	NOUN	_	Case=Nom|Number=Sing	7	compound:lvc	_	_
7	qildi	qil	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 compound:lvc	color:blue
1	Umuman	umuman	ADV	_	_	10	advmod	_	_
2	olganda	ol	VERB	_	_	1	compound	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	oʻqishni	oʻqi	VERB	_	Case=Acc|VerbForm=Vnoun	10	xcomp	_	_
5	emas	emas	AUX	_	Polarity=Neg	4	cop	_	SpaceAfter=No
6	,	,	PUNCT	_	_	4	punct	_	_
7	rasm	rasm	NOUN	_	Case=Nom|Number=Sing	8	obj	_	_
8	chizishni	chiz	VERB	_	Case=Acc|VerbForm=Vnoun	4	conj	_	_
9	yaxshi	yaxshi	ADJ	_	_	10	compound:lvc	_	_
10	koʻradi	koʻr	VERB	_	_	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound:lvc	color:blue
1	Biz	biz	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
2	yoshlarni	yosh	ADJ	_	Case=Acc|Number=Plur	7	obj	_	_
3	erisha	erish	VERB	_	VerbForm=Conv	4	compound	_	_
4	olmaydigan	ol	VERB	_	Polarity=Neg|VerbForm=Part	5	acl	_	_
5	maqsadlardan	maqsad	NOUN	_	Case=Abl|Number=Plur	7	obl	_	_
6	voz	voz	PART	_	_	7	compound:lvc	_	_
7	kechtirishimiz	kech	VERB	_	Number=Plur|Person=1|VerbForm=Vnoun	0	root	_	_
8	kerak	kerak	AUX	_	_	7	aux	_	SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


