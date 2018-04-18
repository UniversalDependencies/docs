---
layout: base
title:  'Statistics of acl:relcl in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="no_nynorsklia-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="no_nynorsklia-dep-acl-cleft.html">acl:cleft</a></tt>.

102 nodes (1%) are attached to their parents as `acl:relcl`.

100 instances of `acl:relcl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.52941176470588.

The following 13 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (40; 39% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (30; 29% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (8; 8% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (6; 6% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	om	om	ADP	_	_	3	case	_	_
2	om	om	ADP	_	_	3	reparandum	_	_
3	dagen	dag	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
4	#	#	PUNCT	_	_	7	punct	_	_
5	som	som	PRON	_	PronType=Rel	7	obj	_	_
6	vi	vi	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
7	bar	bere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	acl:relcl	_	_
8	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl:relcl	color:blue
1	og	og	CCONJ	_	_	2	cc	_	_
2	mange	mange	ADJ	_	Degree=Pos|Number=Plur	0	root	_	_
3	som	som	PRON	_	PronType=Rel	4	nsubj	_	_
4	kjøpte	kjøpe	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	2	acl:relcl	_	_
5	av	av	ADP	_	_	6	case	_	_
6	bøndene	bonde	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	4	obl	_	_
7	å	å	PART	_	_	8	mark	_	_
8	reiste	reiste	VERB	_	VerbForm=Inf	4	xcomp	_	_
9	til	til	ADP	_	_	10	case	_	_
10	byen	by	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	8	obl	_	_
11	med	med	ADP	_	_	12	case	_	_
12	å	å	PART	_	_	8	advmod	_	_
13	.	$.	PUNCT	_	_	2	punct	_	_

~~~


