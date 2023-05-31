---
layout: base
title:  'Statistics of csubj in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="hy_armtdp-dep-csubj-pass.html">csubj:pass</a></tt>.

189 nodes (0%) are attached to their parents as `csubj`.

163 instances of `csubj` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 13 pairs of parts of speech are connected with `csubj`: <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (107; 57% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (41; 22% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (22; 12% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj	color:blue
1	Գեղեցկությանը	գեղեցկություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	2	obl	_	Translit=Geġec’kowt’yanë|LTranslit=geġec’kowt’yown
2	հասնելու	հասնել	VERB	_	Case=Dat|Definite=Ind|Number=Coll|Polarity=Pos|Subcat=Intr|VerbForm=Gdv|Voice=Mid	4	obl	_	Translit=hasnelow|LTranslit=hasnel
3	համար	համար	ADP	_	AdpType=Post	2	case	_	Translit=hamar|LTranslit=hamar
4	պետք	պետք	ADJ	_	_	0	root	_	Translit=petk’|LTranslit=petk’
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	Translit=ē|LTranslit=em
6	գեղեցիկ	գեղեցիկ	ADJ	_	Degree=Pos	7	xcomp	_	Translit=geġec’ik|LTranslit=geġec’ik
7	լինել	լինել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	4	csubj	_	Translit=linel|LTranslit=linel|SpaceAfter=No
8	:	:	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 csubj	color:blue
1	Այրել	այրել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	4	csubj	_	Translit=Ayrel|LTranslit=ayrel
2	կամուրջները	կամուրջ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	1	obj	_	Translit=kamowrǰnerë|LTranslit=kamowrǰ
3	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	aux	_	Translit=či|LTranslit=em
4	հաջողվում	հաջողվել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=haǰoġvowm|LTranslit=haǰoġvel|SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
6	բայց	բայց	CCONJ	_	_	7	cc	_	Translit=bayc’|LTranslit=bayc’
7	կարելի	կարելի	ADJ	_	_	4	conj	_	Translit=kareli|LTranslit=kareli
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	cop	_	Translit=ē|LTranslit=em
9	քանդել	քանդել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	7	csubj	_	Translit=k’andel|LTranslit=k’andel|SpaceAfter=No
10	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 csubj	color:blue
1	Եվ	և	CCONJ	_	_	4	cc	_	Translit=Ev|LTranslit=ew
2	արդեն	արդեն	ADV	_	_	3	advmod	_	Translit=arden|LTranslit=arden
3	երրորդ	երրորդ	ADJ	_	NumForm=Word|NumType=Ord	4	amod	_	Translit=errord|LTranslit=errord
4	օրն	օր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	0	root	_	Translit=òrn|LTranslit=òr
5	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	4	cop	_	Translit=ēr|LTranslit=em|SpaceAfter=No
6	,	,	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
7	որ	որ	SCONJ	_	_	10	mark	_	Translit=or|LTranslit=or
8	անձրևը	անձրև	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	10	nsubj	_	Translit=anjrewë|LTranslit=anjrew
9	չէր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	10	aux	_	Translit=čēr|LTranslit=em
10	դադարում	դադարել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	4	csubj	_	Translit=dadarowm|LTranslit=dadarel|SpaceAfter=No
11	:	:	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~


