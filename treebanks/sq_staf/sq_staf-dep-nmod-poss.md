---
layout: base
title:  'Statistics of nmod:poss in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="sq_staf-dep-nmod.html">nmod</a></tt>.

70 nodes (2%) are attached to their parents as `nmod:poss`.

68 instances of `nmod:poss` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.57142857142857.

The following 9 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (48; 69% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (8; 11% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt> (6; 9% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 nmod:poss	color:blue
1	Ishte	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	_
2	pa	pa	ADP	_	_	3	case	_	_
3	dyshim	dyshim	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	5	obl	_	_
4	dhe	dhe	ADV	_	_	5	advmod	_	_
5	skica	skicë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
6	më	më	ADV	_	_	8	advmod	_	_
7	e	e	DET	_	Case=Nom|Gender=Fem|Number=Sing	8	det:adj	_	_
8	bukur	bukur	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	5	amod	_	_
9	e	e	DET	_	Gender=Fem|Number=Sing	10	det	_	_
10	koleksionit	koleksion	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	nmod:poss	_	SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod:poss	color:blue
1	Pra	Pra	SCONJ	_	_	4	mark	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	ishte	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	end_char=645|start_char=640
4	vjeshtë	vjeshtë	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	end_char=653|start_char=646
5	dhe	dhe	CCONJ	_	_	7	cc	_	end_char=657|start_char=654
6	shiu	shi	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	end_char=662|start_char=658
7	kishte	kam	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	_	end_char=669|start_char=663
8	kohën	kohë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	7	obl	_	end_char=675|start_char=670
9	e	e	DET	_	Gender=Fem|Number=Sing	10	det	_	end_char=677|start_char=676
10	tij	tij	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	nmod:poss	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	end_char=682|start_char=681

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod:poss	color:blue
1	Duhej	duhet	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	_	end_char=1238|start_char=1233
2	të	të	PART	_	_	5	mark	_	_
3	i	ai	PRON	_	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	iobj	_	_
4	i	ai	PRON	_	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs	5	expl	_	_
5	hiqja	heq	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	end_char=1249|start_char=1244
6	Margës	Margë	PROPN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	nmod:poss	_	end_char=1256|start_char=1250
7	nga	nga	ADP	_	_	8	case	_	end_char=1260|start_char=1257
8	koka	kokë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	5	obl	_	end_char=1265|start_char=1261
9	idenë	ide	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	5	obj	_	end_char=1271|start_char=1266
10	e	e	DET	_	Gender=Fem|Number=Sing	11	det	_	end_char=1273|start_char=1272
11	vdekjes	vdekje	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	9	nmod:poss	_	end_char=1281|SpaceAfter=No|start_char=1274
12	.	.	PUNCT	_	_	5	punct	_	end_char=1282|start_char=1281

~~~


