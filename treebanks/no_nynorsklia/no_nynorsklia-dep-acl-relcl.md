---
layout: base
title:  'Statistics of acl:relcl in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="no_nynorsklia-dep-acl.html">acl</a></tt>.

117 nodes (1%) are attached to their parents as `acl:relcl`.

115 instances of `acl:relcl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.39316239316239.

The following 13 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (48; 41% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (32; 27% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (12; 10% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (6; 5% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl:relcl	color:blue
1	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	expl	_	_
3	han	han	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	dislocated	_	_
4	spurde	spørje	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	acl:relcl	_	_
5	etter	etter	ADP	_	_	4	compound:prt	_	_
6	da	da	ADV	_	_	4	advmod	_	_
7	spesielt	spesiell	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	4	advmod	_	_
8	?	$?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:relcl	color:blue
1	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
3	norske	norsk	ADJ	_	Degree=Pos|Number=Plur	0	root	_	_
4	som	som	PRON	_	PronType=Rel	5	nsubj	_	_
5	kontrollerte	kontrollere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	acl:relcl	_	_
6	eller	eller	CCONJ	_	_	9	cc	_	_
7	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	9	cop	_	_
8	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	expl	_	_
9	tyske	tysk	ADJ	_	Degree=Pos|Number=Plur	5	conj	_	_
10	?	$?	PUNCT	_	_	3	punct	_	_

~~~


