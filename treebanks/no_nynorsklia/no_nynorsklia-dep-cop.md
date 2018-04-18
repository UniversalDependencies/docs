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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 cop	color:blue
1	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	10	parataxis:deletion	_	_
3	som	som	PRON	_	PronType=Rel	2	obj	_	_
4	#	#	PUNCT	_	_	10	punct	_	_
5	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	10	cop	_	_
6	vel	vel	ADV	_	_	10	advmod	_	_
7	#	#	PUNCT	_	_	10	punct	_	_
8	alt	all	DET	_	Gender=Neut|Number=Sing|PronType=Tot	10	det	_	_
9	mogleg	mogleg	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	10	advmod	_	_
10	rart	rar	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
11	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	parataxis	_	_
12	der	der	ADV	_	_	11	advmod	_	_
13	greiene	greie	NOUN	_	Definite=Def|Gender=Fem|Number=Plur	12	nmod	_	_
14	der	der	ADV	_	_	13	advmod	_	_
15	.	$.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cop	color:blue
1	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	samlestasjonar	samlestasjon	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	0	root	_	_
4	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	appos	_	_
5	da	da	ADV	_	_	3	advmod	_	_
6	?	$?	PUNCT	_	_	3	punct	_	_

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


