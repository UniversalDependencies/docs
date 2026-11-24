---
layout: base
title:  'Statistics of parataxis in UD_Even-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Even-GDUD: Relations: `parataxis`

This relation is universal.

11 nodes (4%) are attached to their parents as `parataxis`.

8 instances of `parataxis` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.36363636363636.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="eve_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eve_gdud-pos-VERB.html">VERB</a></tt> (3; 27% instances), <tt><a href="eve_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="eve_gdud-pos-VERB.html">VERB</a></tt> (3; 27% instances), <tt><a href="eve_gdud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eve_gdud-pos-PROPN.html">PROPN</a></tt> (2; 18% instances), <tt><a href="eve_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eve_gdud-pos-ADV.html">ADV</a></tt> (1; 9% instances), <tt><a href="eve_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eve_gdud-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="eve_gdud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eve_gdud-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	kuNa-l	kuNa-l	NOUN	_	Number=Plur	0	root	_	Gloss=child-PL
2	imma-ja:	imma-ja:	ADV	_	_	1	parataxis	_	Gloss=fast-AUG|Derivation=Aug
3	urekcˇ	en-duk	NOUN	_	Case=Abl	1	parataxis	_	Gloss=hill-ABL
4	tig-ri-tnen	tig-ri-tnen	VERB	_	Number=Plur|Person=3|Tense=Past	1	parataxis	_	Gloss=fall-PST-3PL

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis	color:blue
1	o.	.o.	PRON	_	PronType=Int	3	nsubj	_	Gloss=how
2	:n	:n	PART	_	_	1	discourse	_	Gloss=CMPS|PartType=Disc
3	nek-e:n-Ãi-m	nek-e:n-Ãi-m	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Fut	0	root	_	Gloss=do-CMPS-FUT-1SG
4	bi:	bi:	PRON	_	Number=Sing|Person=1|PronType=Prs	7	nsubj	_	Gloss=1SG
5	at	at	PART	_	Polarity=Neg	7	discourse	_	Gloss=NEG
6	kuNa-la	kuNa-la	NOUN	_	_	3	obj	_	Gloss=child-PRV|Case=Priv
7	bi-he-m	bi-he-m	VERB	_	Mood=Ind|Number=Sing|Person=1	3	parataxis	_	Gloss=be-NFUT-1SG|Tense=NonPast

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 parataxis	color:blue
1	tarak	tarak	DET	_	Deixis=Remt|PronType=Dem	6	det	_	Gloss=DIST
2	etike-Ne-n	etike-Ne-n	NOUN	_	Person[psor]=3|Poss=Yes	6	parataxis	_	Gloss=old.man-ALN-POSS.3SG
3	etiken	etiken	NOUN	_	_	4	compound	_	Gloss=old.man
4	Kejmetinov	Kejmetinov	PROPN	_	_	6	parataxis	_	Gloss=Kejmetinov
5	Afanasij	Afanasij	PROPN	_	_	6	parataxis	_	Gloss=Afanasij
6	Nikolaevis	Nikolaevis	PROPN	_	_	12	nsubj	_	Gloss=Nikolaevis
7	gerbe	gerbe	NOUN	_	Definite=Def	6	appos	_	Gloss=name
8	abaga-ńÃa-wu	abaga-ńÃa-wu	NOUN	_	Definite=Def|Person[psor]=1|Poss=Yes	12	nmod	_	Gloss=grandfather-AUG.DEF-POSS.1SG|Derivation=Aug
9	bi-hi-n	bi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	12	cop	_	Gloss=be-PST-3SG
10	tala	tala	ADV	_	_	12	advmod	_	SpaceAfter=No|Gloss=there
11	,	,	PUNCT	_	_	12	punct	_	_
12	12	12	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	Gloss=be-PST-3SG

~~~


