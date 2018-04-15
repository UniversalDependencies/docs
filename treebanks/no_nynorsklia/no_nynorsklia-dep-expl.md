---
layout: base
title:  'Statistics of expl in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `expl`

This relation is universal.

185 nodes (1%) are attached to their parents as `expl`.

127 instances of `expl` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.82702702702703.

The following 12 pairs of parts of speech are connected with `expl`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (117; 63% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (27; 15% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (26; 14% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-X.html">X</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl	color:blue
1	kom	komme	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	expl	_	_
3	bilar	bil	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	1	nsubj	_	_
4	frå	frå	ADP	_	_	6	case	_	_
5	heile	heil	ADJ	_	Degree=Pos|Number=Plur	6	amod	_	_
6	Austlandet	Austlandet	PROPN	_	_	1	obl	_	_
7	dit	dit	ADV	_	_	1	advmod	_	_
8	da	da	ADV	_	_	1	advmod	_	_
9	?	$?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 expl	color:blue
1	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	kjøpte	kjøpe	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	han	han	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
4	ikkje	ikkje	PART	_	Polarity=Neg	2	advmod	_	_
5	opp	opp	ADP	_	_	2	compound:prt	_	_
6	#	#	PUNCT	_	_	9	punct	_	_
7	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	expl	_	_
8	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	9	cop	_	_
9	folk	folk	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	2	conj	_	_
10	som	som	PRON	_	PronType=Rel	11	nsubj	_	_
11	sendte	sende	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	9	acl:cleft	_	_
12	han	han	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	obj	_	_
13	med	med	ADP	_	_	11	compound:prt	_	_
14	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
3	norske	norsk	ADJ	_	Degree=Pos|Number=Plur	0	root	_	_
4	som	som	PRON	_	PronType=Rel	5	nsubj	_	_
5	kontrollerte	kontrollere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	acl:cleft	_	_
6	eller	eller	CCONJ	_	_	9	cc	_	_
7	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	9	cop	_	_
8	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	expl	_	_
9	tyske	tysk	ADJ	_	Degree=Pos|Number=Plur	5	conj	_	_
10	?	$?	PUNCT	_	_	3	punct	_	_

~~~


