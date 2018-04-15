---
layout: base
title:  'Statistics of acl:cleft in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `acl:cleft`

This relation is a language-specific subtype of <tt><a href="no_nynorsklia-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="no_nynorsklia-dep-acl-relcl.html">acl:relcl</a></tt>.

15 nodes (0%) are attached to their parents as `acl:cleft`.

15 instances of `acl:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.46666666666667.

The following 4 pairs of parts of speech are connected with `acl:cleft`: <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (8; 53% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (4; 27% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (2; 13% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl:cleft	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:cleft	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:cleft	color:blue
1	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
3	nokon	nokon	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Ind,Prs	0	root	_	_
4	som	som	PRON	_	PronType=Rel	5	nsubj	_	_
5	dreiv	drive	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	acl:cleft	_	_
6	med	med	ADP	_	_	8	case	_	_
7	forskjellige	forskjellig	ADJ	_	Degree=Pos|Number=Plur	8	amod	_	_
8	ting	ting	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	5	obl	_	_
9	på	på	ADP	_	_	10	case	_	_
10	gardane	gard	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	5	nmod	_	_
11	da	da	ADV	_	_	5	advmod	_	_
12	.	$.	PUNCT	_	_	3	punct	_	_

~~~


