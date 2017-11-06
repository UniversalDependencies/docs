---
layout: base
title:  'Statistics of cop in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `cop`

This relation is universal.

361 nodes (3%) are attached to their parents as `cop`.

351 instances of `cop` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.2409972299169.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (154; 43% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (121; 34% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (20; 6% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (18; 5% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (16; 4% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (12; 3% instances), <tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (9; 2% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (9; 2% instances), <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 cop	color:blue
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


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 cop	color:blue
1	den	den	DET	_	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	tid	tid	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	6	obl	_	_
3	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	6	cop	_	_
4	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
5	jo	jo	ADV	_	_	6	advmod	_	_
6	tennpluggar	tennplugg	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	0	root	_	_
7	og	og	CCONJ	_	_	9	cc	_	_
8	#	#	PUNCT	_	_	9	punct	_	_
9	vanleg	vanleg	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	6	conj	_	_
10	.	$.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	kven	kven	PRON	_	Animacy=Hum|Case=Acc|PronType=Int	3	nsubj	_	_
2	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	0	root	_	_
4	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
5	kjøpte	kjøpe	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	acl:relcl	_	_
6	opp	opp	ADP	_	_	5	compound:prt	_	_
7	den	den	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
8	av	av	ADP	_	_	9	reparandum	_	_
9	av	av	ADP	_	_	5	compound:prt	_	_
10	her	her	ADV	_	_	5	advmod	_	_
11	da	da	ADV	_	_	5	advmod	_	_
12	?	$?	PUNCT	_	_	3	punct	_	_

~~~


