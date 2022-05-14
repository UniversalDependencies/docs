---
layout: base
title:  'Statistics of xcomp in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="fi_pud-dep-xcomp-ds.html">xcomp:ds</a></tt>.

159 nodes (1%) are attached to their parents as `xcomp`.

154 instances of `xcomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.42767295597484.

The following 10 pairs of parts of speech are connected with `xcomp`: <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (111; 70% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (21; 13% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (13; 8% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (6; 4% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="fi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Kaikki	kaikki	PRON	_	Case=Nom|Number=Sing|PronType=Ind	3	nsubj	3:nsubj	_
2	eivät	ei	AUX	_	Number=Plur|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
3	pysty	pystyä	VERB	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	jättämään	jättää	VERB	_	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	3	xcomp	3:xcomp	_
5	sitä	se	PRON	_	Case=Par|Number=Sing|PronType=Dem	4	obj	4:obj	_
6	omaan	oma	ADJ	_	Case=Ill|Degree=Pos|Number=Sing	7	amod	7:amod	_
7	arvoonsa	arvo	NOUN	_	Case=Ill|Number=Sing|Person[psor]=3	4	obl	4:obl	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 xcomp	color:blue
1	Kun	kun	SCONJ	_	_	4	mark	4:mark	_
2	Qing	Qing	PROPN	_	Case=Nom|Number=Sing	3	compound:nn	3:compound:nn	SpaceAfter=No
3	-dynastia	dynastia	NOUN	_	Case=Nom|Number=Sing	4	nsubj	4:nsubj	_
4	kaatui	kaatua	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	11	advcl	11:advcl	_
5	1911	1911	NUM	_	NumType=Card	4	obl	4:obl	SpaceAfter=No
6	,	,	PUNCT	_	_	4	punct	4:punct	_
7	Bogd	Bogd	PROPN	_	Case=Nom|Number=Sing	9	nsubj	9:nsubj	_
8	Khanin	Khan	PROPN	_	Case=Gen|Number=Sing	7	flat:name	7:flat:name	_
9	johtama	johtaa	VERB	_	Case=Nom|Number=Sing|PartForm=Agt|VerbForm=Part|Voice=Act	10	acl	10:acl	_
10	Mongolia	Mongolia	PROPN	_	Case=Nom|Number=Sing	11	nsubj	11:nsubj	_
11	julistautui	julistautua	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
12	itsenäiseksi	itsenäinen	ADJ	_	Case=Tra|Degree=Pos|Derivation=Inen|Number=Sing	11	xcomp	11:xcomp	SpaceAfter=No
13	.	.	PUNCT	_	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	Yhden	yksi	NUM	_	Case=Gen|Number=Sing|NumType=Card	2	nummod	2:nummod	_
2	jakson	jakso	NOUN	_	Case=Gen|Number=Sing	3	nmod:poss	3:nmod:poss	_
3	aikana	aika	NOUN	_	Case=Ess|Number=Sing	5	obl	5:obl	_
4	hän	hän	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj	_
5	paljastuu	paljastua	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	taitavaksi	taitava	ADJ	_	Case=Tra|Degree=Pos|Number=Sing	7	amod	7:amod	_
7	kitaristiksi	kitaristi	NOUN	_	Case=Tra|Number=Sing	5	xcomp	5:xcomp	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


