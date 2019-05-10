---
layout: base
title:  'Statistics of ccomp in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `ccomp`

This relation is universal.

216 nodes (0%) are attached to their parents as `ccomp`.

216 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.42592592592593.

The following 9 pairs of parts of speech are connected with `ccomp`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (164; 76% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (26; 12% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (14; 6% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	ja	ja	INTJ	_	_	3	discourse	_	_
2	#	#	PUNCT	_	_	1	punct	_	_
3	hugsar	hugse	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	_
5	kor	kor	ADV	_	_	6	advmod	_	_
6	mange	mange	ADJ	_	Degree=Pos|Number=Plur	8	advmod	_	_
7	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	8	nsubj	_	_
8	hadde	ha	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	ccomp	_	_
9	med	med	ADP	_	_	8	compound:prt	_	_
10	om	om	ADP	_	_	11	case	_	_
11	gongen	gong	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	8	obl	_	_
12	omtrent	omtrent	ADV	_	_	8	advmod	_	_
13	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 ccomp	color:blue
1	nei	nei	INTJ	_	_	3	discourse	_	_
2	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	trur	tru	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	ikkje	ikkje	PART	_	Polarity=Neg	3	advmod	_	_
5	ho	ho	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
6	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	noko	nokon	DET	_	Gender=Neut|Number=Sing|PronType=Ind	9	det	_	_
8	sånn	sånn	DET	_	Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	spesielt	spesiell	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	ccomp	_	_
10	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 ccomp	color:blue
1	tysk	tysk	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	5	advmod	_	_
2	og	og	CCONJ	_	_	4	cc	_	_
3	#	#	PUNCT	_	_	2	punct	_	_
4	russisk	russisk	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	1	advmod	_	_
5	trur	tru	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
6	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
7	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	10	cop	_	_
8	russisk	russisk	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	10	amod	_	_
9	#	#	PUNCT	_	_	8	punct	_	_
10	ubåt	ubåt	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	ccomp	_	_
11	.	$.	PUNCT	_	_	5	punct	_	_

~~~


