---
layout: base
title:  'Statistics of flat:name in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `flat:name`

This relation is a language-specific subtype of .

43 nodes (0%) are attached to their parents as `flat:name`.

43 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.69767441860465.

The following 9 pairs of parts of speech are connected with `flat:name`: <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (20; 47% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (9; 21% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (5; 12% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt> (2; 5% instances), <tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Scweigaards	Scweigaards	PROPN	_	_	0	root	_	_
2	gate	gate	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	1	flat:name	_	_
3	#	#	PUNCT	_	_	4	punct	_	_
4	jaha	jaha	INTJ	_	_	1	discourse	_	_
5	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Johannes	Johannes	PROPN	_	_	3	obj	_	_
2	Linde	Linde	PROPN	_	_	1	flat:name	_	_
3	heitte	heite	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	han	han	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
5	ein	ein	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|PronType=Art,Prs	4	appos	_	_
6	som	som	PRON	_	PronType=Rel	7	nsubj	_	_
7	fekk	få	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	acl:relcl	_	_
8	krepsen	kreps	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	7	obj	_	_
9	han	han	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	budde	bu	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	conj	_	_
11	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 flat:name	color:blue
1	e	e	X	_	_	2	discourse:filler	_	_
2	elles	elles	ADV	_	_	5	advmod	_	_
3	fritida	fritid	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	5	nsubj	_	_
4	der	der	ADV	_	_	5	advmod	_	_
5	er	vere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
6	jo	jo	ADV	_	_	5	advmod	_	_
7	ja	ja	INTJ	_	_	5	discourse	_	_
8	laurdag	laurdag	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	flat:name	_	_
9	søndag	søndag	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	flat:name	_	_
10	kanskje	kanskje	ADV	_	_	5	advmod	_	_
11	fredag	fredag	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	flat:name	_	_
12	laurdag	laurdag	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	flat:name	_	_
13	søndag	søndag	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	flat:name	_	_
14	#	#	PUNCT	_	_	18	punct	_	_
15	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	18	cop	_	_
16	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	expl	_	_
17	noko	nokon	DET	_	Gender=Neut|Number=Sing|PronType=Ind	18	det	_	_
18	spesielt	spesiell	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	5	conj	_	_
19	å	å	PART	_	_	20	mark	_	_
20	ta	ta	VERB	_	VerbForm=Inf	18	advcl	_	_
21	seg	seg	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	20	obj	_	_
22	til	til	ADP	_	_	20	compound:prt	_	_
23	da	da	ADV	_	_	20	advmod	_	_
24	#	#	PUNCT	_	_	25	punct	_	_
25	her	her	ADV	_	_	20	advmod	_	_
26	?	$?	PUNCT	_	_	5	punct	_	_

~~~


