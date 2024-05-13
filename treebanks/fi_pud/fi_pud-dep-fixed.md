---
layout: base
title:  'Statistics of fixed in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `fixed`

This relation is universal.

30 nodes (0%) are attached to their parents as `fixed`.

30 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 12 pairs of parts of speech are connected with `fixed`: <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (14; 47% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (3; 10% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (3; 10% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (2; 7% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fi_pud-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 fixed	color:blue
1	Ja	ja	CCONJ	_	_	4	cc	4:cc	_
2	totta	totta	ADV	_	_	4	advmod	4:advmod	_
3	kai	kai	ADV	_	_	2	fixed	2:fixed	_
4	on	olla	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	Bob	Bob	PROPN	_	Case=Nom|Number=Sing	4	nsubj	4:nsubj	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	9:punct	_
7	viihteen	viihde	NOUN	_	Case=Gen|Number=Sing	9	nmod:poss	9:nmod:poss	_
8	loputon	loputon	ADJ	_	Case=Nom|Degree=Pos|Derivation=Ton|Number=Sing	9	amod	9:amod	_
9	lähde	lähde	NOUN	_	Case=Nom|Number=Sing	5	appos	5:appos	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Keski-Andit	Keski-Andit	PROPN	_	Case=Nom|Number=Plur	2	nsubj	2:nsubj	_
2	kuuluvat	kuulua	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	niin	niin	ADV	_	_	5	amod	5:amod	_
4	kutsuttuihin	kutsuttu	ADJ	_	Case=Ill|Degree=Pos|Number=Plur	3	fixed	3:fixed	_
5	Andes	Andes	PROPN	_	Case=Nom|Number=Sing	2	obl	2:obl	_
6	de	de	PROPN	_	Case=Nom|Number=Sing	5	flat:name	5:flat:name	_
7	tipo	tipo	PROPN	_	Case=Nom|Number=Sing	5	flat:name	5:flat:name	_
8	andinoon	andino	PROPN	_	Case=Ill|Number=Sing	5	flat:name	5:flat:name	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	11:punct	_
10	jotka	joka	PRON	_	Case=Nom|Number=Plur|PronType=Rel	11	nsubj	11:nsubj	_
11	muodostuivat	muodostua	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	5:acl:relcl	_
12	valtamerenpohjan	valta#meri#pohja	NOUN	_	Case=Gen|Number=Sing	13	nmod:poss	13:nmod:poss	_
13	kuoren	kuori	NOUN	_	Case=Gen|Number=Sing	14	nmod:poss	14:nmod:poss	_
14	subduktiosta	subduktio	NOUN	_	Case=Ela|Number=Sing	11	obl	11:obl	SpaceAfter=No
15	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	Internet	internet	NOUN	_	Case=Nom|Number=Sing	7	nsubj:cop	7:nsubj:cop	_
2	ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	7	aux	7:aux	_
3	kuitenkaan	kuitenkaan	ADV	_	_	7	advmod	7:advmod	_
4	loppujen	loppu	NOUN	_	Case=Gen|Derivation=U|Number=Plur	7	obl	7:obl	_
5	lopuksi	lopuksi	ADV	_	_	4	fixed	4:fixed	_
6	ole	olla	AUX	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
7	luksusta	luksus	NOUN	_	Case=Par|Number=Sing	0	root	0:root	SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	12:punct	_
9	se	se	PRON	_	Case=Nom|Number=Sing|PronType=Dem	12	nsubj:cop	12:nsubj:cop	_
10	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	12:cop	_
11	välttämätön	välttämätön	ADJ	_	Case=Nom|Degree=Pos|Derivation=Ton|Number=Sing	12	amod	12:amod	_
12	työkalu	työkalu	NOUN	_	Case=Nom|Number=Sing	7	conj	7:conj	SpaceAfter=No
13	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


