---
layout: base
title:  'Statistics of cc in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `cc`

This relation is universal.

615 nodes (5%) are attached to their parents as `cc`.

594 instances of `cc` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75772357723577.

The following 18 pairs of parts of speech are connected with `cc`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-CCONJ.html">CCONJ</a></tt> (363; 59% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-CCONJ.html">CCONJ</a></tt> (90; 15% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-CCONJ.html">CCONJ</a></tt> (57; 9% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-CCONJ.html">CCONJ</a></tt> (21; 3% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-CCONJ.html">CCONJ</a></tt> (20; 3% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-CCONJ.html">CCONJ</a></tt> (15; 2% instances), <tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsklia-pos-CCONJ.html">CCONJ</a></tt> (14; 2% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-CCONJ.html">CCONJ</a></tt> (11; 2% instances), <tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt>-<tt><a href="no_nynorsklia-pos-CCONJ.html">CCONJ</a></tt> (6; 1% instances), <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsklia-pos-CCONJ.html">CCONJ</a></tt> (5; 1% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="no_nynorsklia-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	og	og	CCONJ	_	_	3	cc	_	_
2	nå	nå	ADV	_	_	3	advmod	_	_
3	kostar	koste	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	han	han	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
5	?	$?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	men	men	CCONJ	_	_	5	cc	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
3	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
4	han	han	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	det	_	_
5	far	far	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
6	som	som	PRON	_	PronType=Rel	7	nsubj	_	_
7	dreiv	drive	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	acl:relcl	_	_
8	garden	gard	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	7	obj	_	_
9	da	da	ADV	_	_	7	advmod	_	_
10	ja	ja	INTJ	_	_	7	obl	_	_
11	#	#	PUNCT	_	_	13	punct	_	_
12	han	han	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	det	_	_
13	M12	M12	PROPN	_	_	5	appos	_	_
14	?	$?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 cc	color:blue
1	e	e	X	_	_	5	discourse:filler	_	_
2	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
3	må	måtte	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	nok	nok	ADV	_	_	5	advmod	_	_
5	gi	gi	VERB	_	VerbForm=Inf	0	root	_	_
6	p-	p-	X	_	_	9	discourse:filler	_	_
7	to	to	NUM	_	Number=Plur|NumType=Card	9	nummod	_	_
8	hundre	hundre	NUM	_	Number=Plur|NumType=Card	9	nummod	_	_
9	tusen	tusen	NUM	_	Number=Plur|NumType=Card	5	obj	_	_
10	for	for	ADP	_	_	11	case	_	_
11	ein	ein	PRON	_	Animacy=Hum|Case=Acc|Number=Sing|PronType=Art,Prs	5	obl	_	_
12	men	men	CCONJ	_	_	15	cc	_	_
13	den	den	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
14	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	15	cop	_	_
15	større	stor	ADJ	_	_	5	conj	_	_
16	da	da	ADV	_	_	15	advmod	_	_
17	.	$.	PUNCT	_	_	5	punct	_	_

~~~


