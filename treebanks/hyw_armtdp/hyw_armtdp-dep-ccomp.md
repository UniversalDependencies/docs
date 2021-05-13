---
layout: base
title:  'Statistics of ccomp in UD_Western_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Western_Armenian-ArmTDP: Relations: `ccomp`

This relation is universal.

247 nodes (1%) are attached to their parents as `ccomp`.

241 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.60323886639676.

The following 9 pairs of parts of speech are connected with `ccomp`: <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt> (195; 79% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-ADJ.html">ADJ</a></tt> (27; 11% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt> (15; 6% instances), <tt><a href="hyw_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="hyw_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 ccomp	color:blue
1	Մինակս	մինակ	NOUN	_	Animacy=Hum|Case=Nom|Number=Sing|Person[psor]=1	3	nsubj	_	Translit=Minaks|LTranslit=minak
2	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	3	aux	_	Translit=kë|LTranslit=kë
3	քալեմ	քալել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=1|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=k’alem|LTranslit=k’alel
4	փողոցներու	փողոց	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	3	obl	_	Translit=p’oġoc’nerow|LTranslit=p’oġoc’
5	մէջ	մէջ	ADP	_	AdpType=Post	4	case	_	Translit=mēǰ|LTranslit=mēǰ
6	եւ	եւ	CCONJ	_	_	8	cc	_	Translit=ew|LTranslit=ew
7	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	8	aux	_	Translit=kë|LTranslit=kë
8	փորձեմ	փորձել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=1|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	Translit=p’orjem|LTranslit=p’orjel
9	գնումներ	գնում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	10	obj	_	Translit=gnowmner|LTranslit=gnowm
10	ընել	ընել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	8	ccomp	_	Translit=ënel|LTranslit=ënel|SpaceAfter=No
11	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
1	Անպիտանը	անպիտան	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	3	nsubj	_	Translit=Anpitanë|LTranslit=anpitan
2	չէր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	3	aux	_	Translit=čēr|LTranslit=em
3	ուզեր	ուզել	VERB	_	Aspect=Imp|Connegative=Yes|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=owzer|LTranslit=owzel
4	ըսել	ըսել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	3	xcomp	_	Translit=ësel|LTranslit=ësel|SpaceAfter=No
5	,	,	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
6	որ	որ	SCONJ	_	_	9	mark	_	Translit=or|LTranslit=or
7	քաղաքը	քաղաք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	9	obl	_	Translit=k’aġak’ë|LTranslit=k’aġak’
8	աւելի	աւելի	ADV	_	Degree=Cmp	9	advmod	_	Translit=aweli|LTranslit=aweli
9	սուղ	սուղ	ADJ	_	Degree=Pos	4	ccomp	_	Translit=sowġ|LTranslit=sowġ
10	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
11	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Կը	կը	AUX	_	Aspect=Imp|Mood=Ind	2	aux	_	Translit=Kë|LTranslit=kë
2	մոռնանք	մոռնալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=1|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=moṙnank’|LTranslit=moṙnal|SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,
4	որ	որ	SCONJ	_	_	6	mark	_	Translit=or|LTranslit=or
5	մենք	մենք	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	Translit=menk’|LTranslit=menk’
6	Հայ	հայ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	2	ccomp	_	Translit=Hay|LTranslit=hay
7	ենք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	6	cop	_	Translit=enk’|LTranslit=em|SpaceAfter=No
8	։	։	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


