---
layout: base
title:  'Statistics of acl:cleft in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `acl:cleft`

This relation is a language-specific subtype of <tt><a href="no_nynorsk-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="no_nynorsk-dep-acl-relcl.html">acl:relcl</a></tt>.

300 nodes (0%) are attached to their parents as `acl:cleft`.

300 instances of `acl:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.88666666666667.

The following 11 pairs of parts of speech are connected with `acl:cleft`: <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (180; 60% instances), <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (51; 17% instances), <tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (17; 6% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (15; 5% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (15; 5% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (11; 4% instances), <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:cleft	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
2	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	eit	ein	DET	_	Gender=Neut|Number=Sing|PronType=Art	4	det	_	_
4	menneske	menneske	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
5	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	kysser	kysse	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	acl:cleft	_	SpaceAfter=No
7	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl:cleft	color:blue
1	Kva	kva	PRON	_	PronType=Int	0	root	_	_
2	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	expl	_	_
4	som	som	PRON	_	PronType=Rel	5	nsubj	_	_
5	gjer	gjere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	1	acl:cleft	_	_
6	Eminem	Eminem	PROPN	_	_	5	obj	_	_
7	så	så	ADV	_	_	8	advmod	_	_
8	stor	stor	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	5	xcomp	_	SpaceAfter=No
9	?	$?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:cleft	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	Seneca	Seneca	PROPN	_	_	0	root	_	_
4	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	likar	like	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	acl:cleft	_	_
6	best	god	ADJ	_	Definite=Ind|Degree=Sup	5	advmod	_	_
7	av	av	ADP	_	_	8	case	_	_
8	stoikarane	stoikar	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	5	obl	_	_
9	i	i	ADP	_	_	10	case	_	_
10	romartida	romartid	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	3	punct	_	_

~~~


