---
layout: base
title:  'Statistics of acl:relcl in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="kk_ktb-dep-acl.html">acl</a></tt>.

95 nodes (1%) are attached to their parents as `acl:relcl`.

95 instances of `acl:relcl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.91578947368421.

The following 6 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (76; 80% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt> (7; 7% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 acl:relcl	color:blue
1	Алматы	Алматы	PROPN	np	Case=Nom	2	nmod:poss	_	_
2	облысы	облыс	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	9	nsubj	_	_
3	–	–	PUNCT	guio	_	2	punct	_	_
4	еліміздің	ел	NOUN	n	Case=Gen|Number[psor]=Plur|Person[psor]=1	8	nmod:poss	_	_
5	халық	халық	NOUN	n	Case=Nom	7	nsubj	_	_
6	тығыз	тығыз	ADJ	adj	_	7	advmod	_	_
7	топтасқан	топта	VERB	v	Tense=Past|VerbForm=Part|Voice=Rcp	8	acl:relcl	_	_
8	өңірлерінің	өңір	NOUN	n	Case=Gen|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	9	nmod:poss	_	_
9	бірі	бір	NUM	num	Case=Nom|Number[psor]=Plur,Sing|NumType=Card|Person[psor]=3	0	root	_	SpaceAfter=No
10	.	.	PUNCT	sent	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 acl:relcl	color:blue
1	-	-	PUNCT	guio	_	9	punct	_	_
2	Жаңа	жаңа	ADJ	adj	_	3	amod	_	_
3	тұжырымдама	тұжырымдама	NOUN	n	Case=Nom	8	nsubj	_	_
4	толыққанды	толыққанды	ADJ	adj	_	7	acl:relcl	_	_
5	және	және	CCONJ	cnjcoo	_	6	cc	_	_
6	дер	де	VERB	v	Tense=Fut|VerbForm=Part	4	conj	_	_
7	кезінде	кез	NOUN	n	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	8	obl	_	_
8	енгізілуі	енгіз	VERB	v	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3|VerbForm=Ger|Voice=Pass	9	csubj	_	_
9	қажет	қажет	ADJ	adj	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	sent	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 acl:relcl	color:blue
1	Малына	мал	NOUN	n	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3	4	obl	_	SpaceAfter=No
2	,	,	PUNCT	cm	_	3	punct	_	_
3	жанына	жан	NOUN	n	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3	1	conj	_	_
4	ие	ие	NOUN	n	Case=Nom	8	acl:relcl	_	_
5	болып	бол	AUX	v	Aspect=Perf|VerbForm=Inf	4	cop	_	_
6	отырған	отыр	AUX	vaux	Tense=Past|VerbForm=Part	4	aux	_	_
7	қай	қай	DET	det	PronType=Int	8	det	_	_
8	қазақ	қазақ	NOUN	n	Case=Nom	9	nsubj	_	_
9	бар	бар	ADJ	adj	_	0	root	_	SpaceAfter=No
10	?	?	PUNCT	sent	_	9	punct	_	_

~~~


