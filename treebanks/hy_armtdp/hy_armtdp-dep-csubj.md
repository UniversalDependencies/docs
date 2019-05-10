---
layout: base
title:  'Statistics of csubj in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="hy_armtdp-dep-csubj-pass.html">csubj:pass</a></tt>.

149 nodes (0%) are attached to their parents as `csubj`.

128 instances of `csubj` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.01342281879195.

The following 10 pairs of parts of speech are connected with `csubj`: <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (85; 57% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (36; 24% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (16; 11% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Պետք	պետք	ADJ	_	_	0	root	_	Translit=petk’|LTranslit=petk’
2	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	1	cop	_	Translit=či|LTranslit=em
3	ամաչել	ամաչել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	1	csubj	_	Translit=amačel|LTranslit=amačel|SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
5	աշխարհում	աշխարհ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	7	obl	_	Translit=ašxarhowm|LTranslit=ašxarh
6	մենակ	մենակ	ADV	_	_	7	advmod:emph	_	Translit=menak|LTranslit=menak
7	դու	դու	PRON	_	Case=Nom|Number=Sing|Person=2|Polite=Infm|PronType=Prs	1	conj	_	Translit=dow|LTranslit=dow
8	չես	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	cop	_	Translit=čes|LTranslit=em|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
10	որդիս	որդի	NOUN	_	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	1	vocative	_	Translit=ordis|LTranslit=ordi|SpaceAfter=No
11	:	:	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj	color:blue
1	Շփոթի	շփոթ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	obl	_	Translit=šp’ot’i|LTranslit=šp’ot’
2	մեջ	մեջ	ADP	_	AdpType=Post|Case=Nom	1	case	_	Translit=meǰ|LTranslit=meǰ
3	Սիմեոնին	Սիմեոն	PROPN	_	Animacy=Hum|Case=Dat|Definite=Def|NameType=Giv|Number=Sing	4	iobj	_	Translit=simeonin|LTranslit=simeon
4	հաջողվեց	հաջողվել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=haǰoġvec’|LTranslit=haǰoġvel
5	գերել	գերել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	4	csubj	_	Translit=gerel|LTranslit=gerel
6	նրանց	նա	DET	_	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Prs	7	det:poss	_	Translit=nranc’|LTranslit=na
7	առաջնորդին	առաջնորդ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	5	obj	_	Translit=aṙaǰnordin|LTranslit=aṙaǰnord|SpaceAfter=No
8	:	:	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 csubj	color:blue
1	Եվ	և	CCONJ	_	_	4	cc	_	Translit=ev|LTranslit=ew
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


