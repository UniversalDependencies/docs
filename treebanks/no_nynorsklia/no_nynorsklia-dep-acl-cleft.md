---
layout: base
title:  'Statistics of acl:cleft in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `acl:cleft`

This relation is a language-specific subtype of <tt><a href="no_nynorsklia-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="no_nynorsklia-dep-acl-relcl.html">acl:relcl</a></tt>.

156 nodes (0%) are attached to their parents as `acl:cleft`.

156 instances of `acl:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.17307692307692.

The following 9 pairs of parts of speech are connected with `acl:cleft`: <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (77; 49% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (45; 29% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (12; 8% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (8; 5% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (6; 4% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (1; 1% instances).


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
6	#	#	PUNCT	_	_	7	punct	_	_
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:cleft	color:blue
1	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
3	nokon	nokon	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Ind,Prs	0	root	_	_
4	som	som	PRON	_	PronType=Rel	6	iobj	_	_
5	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	hadde	ha	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	acl:cleft	_	_
7	mange	mang_ein	NUM	_	Number=Plur|NumType=Card	6	obj	_	_
8	av	av	ADP	_	_	7	obl	_	_
9	som	som	PRON	_	PronType=Rel	12	obj	_	_
10	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
11	måtte	måtte	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	12	aux	_	_
12	hive	hive	VERB	_	VerbForm=Inf	6	advcl	_	_
13	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:cleft	color:blue
1	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	det	det	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
3	mange	mange	ADJ	_	Degree=Pos|Number=Plur	0	root	_	_
4	som	som	PRON	_	PronType=Rel	5	nsubj	_	_
5	går	gå	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	acl:cleft	_	_
6	#	#	PUNCT	_	_	7	punct	_	_
7	den	den	DET	_	Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
8	vegen	veg	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	5	obl	_	_
9	#	#	PUNCT	_	_	5	punct	_	_
10	?	$?	PUNCT	_	_	3	punct	_	_

~~~


