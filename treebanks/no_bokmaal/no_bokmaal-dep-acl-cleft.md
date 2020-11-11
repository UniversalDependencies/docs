---
layout: base
title:  'Statistics of acl:cleft in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `acl:cleft`

This relation is a language-specific subtype of <tt><a href="no_bokmaal-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="no_bokmaal-dep-acl-relcl.html">acl:relcl</a></tt>.

313 nodes (0%) are attached to their parents as `acl:cleft`.

313 instances of `acl:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.84984025559105.

The following 16 pairs of parts of speech are connected with `acl:cleft`: <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (158; 50% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (68; 22% instances), <tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (26; 8% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (14; 4% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (12; 4% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (9; 3% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="no_bokmaal-pos-DET.html">DET</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="no_bokmaal-pos-DET.html">DET</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl:cleft	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	expl	_	_
2	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	cop	_	_
3	nok	nok	ADV	_	_	8	advmod	_	_
4	heller	heller	ADV	_	_	8	advmod	_	_
5	Frps	Frp	PROPN	_	Abbr=Yes|Case=Gen	8	nmod	_	_
6	økte	øke	ADJ	_	Definite=Def|Number=Sing|VerbForm=Part	8	amod	_	_
7	politiske	politisk	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	8	amod	_	_
8	kjøttvekt	kjøttvekt	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
9	som	som	PRON	_	PronType=Rel	10	nsubj	_	_
10	slår	slå	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	acl:cleft	_	_
11	ut	ut	ADP	_	_	10	compound:prt	_	SpaceAfter=No
12	.	$.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:cleft	color:blue
1	Men	men	CCONJ	_	_	5	cc	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
3	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	nettopp	nettopp	ADV	_	_	5	advmod	_	_
5	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	0	root	_	_
6	som	som	PRON	_	PronType=Rel	7	nsubj	_	_
7	skjer	skje	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	acl:cleft	_	SpaceAfter=No
8	.	$.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:cleft	color:blue
1	Eller	eller	CCONJ	_	_	4	cc	_	_
2	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	cop	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
4	Sacha	Sacha	PROPN	_	_	0	root	_	_
5	Baron	Baron	PROPN	_	_	4	flat:name	_	_
6	Cohen	Cohen	PROPN	_	_	4	flat:name	_	_
7	han	han	PRON	_	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	siktet	sikte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	acl:cleft	_	_
9	til	til	ADP	_	_	8	compound:prt	_	SpaceAfter=No
10	?	$?	PUNCT	_	_	4	punct	_	_

~~~


