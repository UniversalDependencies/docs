---
layout: base
title:  'Statistics of csubj in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="no_nynorsk-dep-csubj-pass.html">csubj:pass</a></tt>.

1044 nodes (0%) are attached to their parents as `csubj`.

937 instances of `csubj` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.98371647509579.

The following 21 pairs of parts of speech are connected with `csubj`: <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (524; 50% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (256; 25% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (148; 14% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (25; 2% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (19; 2% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (15; 1% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (12; 1% instances), <tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (12; 1% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="no_nynorsk-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
1	Då	då	ADV	_	_	4	advmod	_	_
2	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
4	viktig	viktig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
5	å	å	PART	_	_	6	mark	_	_
6	ha	ha	VERB	_	VerbForm=Inf	4	csubj	_	_
7	eit	ein	DET	_	Gender=Neut|Number=Sing|PronType=Art	9	det	_	_
8	godt	god	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	9	amod	_	_
9	brød	brød	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	6	obj	_	_
10	å	å	PART	_	_	11	mark	_	_
11	smøre	smøre	VERB	_	VerbForm=Inf	9	acl	_	_
12	matpakke	matpakke	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	11	obj	_	_
13	av	av	ADP	_	_	12	nmod	_	SpaceAfter=No
14	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 csubj	color:blue
1	-	$-	PUNCT	_	_	7	punct	_	_
2	Kor	kor	ADV	_	_	3	advmod	_	_
3	lang	lang	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	4	amod	_	_
4	tid	tid	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	7	obj	_	_
5	vil	vilje	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	expl	_	_
7	taka	take	VERB	_	VerbForm=Inf	0	root	_	_
8	å	å	PART	_	_	9	mark	_	_
9	få	få	VERB	_	VerbForm=Inf	7	csubj	_	_
10	Hellas	Hellas	PROPN	_	_	9	obj	_	_
11	på	på	ADP	_	_	12	case	_	_
12	fote	fote	NOUN	_	_	9	obl	_	SpaceAfter=No
13	?	$?	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
1	-	$-	PUNCT	_	_	4	punct	_	_
2	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
3	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	galenskap	galenskap	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
5	å	å	PART	_	_	6	mark	_	_
6	øydeleggja	øydeleggje	VERB	_	VerbForm=Inf	4	csubj	_	_
7	ein	ein	DET	_	Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	økonomi	økonomi	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	6	obj	_	_
9	på	på	ADP	_	_	11	case	_	_
10	denne	denne	DET	_	Gender=Masc|Number=Sing|PronType=Dem	11	det	_	_
11	måten	måte	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
12	.	$.	PUNCT	_	_	4	punct	_	_

~~~


