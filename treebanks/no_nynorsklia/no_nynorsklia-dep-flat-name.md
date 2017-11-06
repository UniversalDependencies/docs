---
layout: base
title:  'Statistics of flat:name in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `flat:name`

This relation is a language-specific subtype of .

20 nodes (0%) are attached to their parents as `flat:name`.

20 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05.

The following 7 pairs of parts of speech are connected with `flat:name`: <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (7; 35% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (5; 25% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (2; 10% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (2; 10% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt> (2; 10% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-X.html">X</a></tt> (1; 5% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Scweigaards	Scweigaards	PROPN	_	_	4	obj	_	_
2	gate	gate	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	1	flat:name	_	_
3	#	#	PUNCT	_	_	4	punct	_	_
4	jaha	jaha	INTJ	_	_	0	root	_	_
5	.	$.	PUNCT	_	_	4	punct	_	_

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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:name	color:blue
1	den	den	DET	_	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	eldste	gammal	ADJ	_	Definite=Def|Degree=Sup	7	nsubj	_	_
3	#	#	PUNCT	_	_	7	punct	_	_
4	han	han	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
5	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	på	på	ADP	_	_	7	case	_	_
7	Mo	Mo	PROPN	_	_	0	root	_	_
8	i	i	ADP	_	_	7	flat:name	_	_
9	Rana	Rana	PROPN	_	_	8	flat:name	_	_
10	#	#	PUNCT	_	_	13	punct	_	_
11	han	han	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
12	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	vore	vere	VERB	_	VerbForm=Part	7	conj	_	_
14	i	i	ADP	_	_	17	case	_	_
15	#	#	PUNCT	_	_	17	punct	_	_
16	fjorten	fjorten	NUM	_	Number=Plur|NumType=Card	17	nummod	_	_
17	år	år	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	13	obl	_	_
18	.	$.	PUNCT	_	_	7	punct	_	_

~~~


