---
layout: base
title:  'Statistics of csubj in UD_Western_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Western_Armenian-ArmTDP: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="hyw_armtdp-dep-csubj-pass.html">csubj:pass</a></tt>.

123 nodes (0%) are attached to their parents as `csubj`.

107 instances of `csubj` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.79674796747967.

The following 11 pairs of parts of speech are connected with `csubj`: <tt><a href="hyw_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt> (47; 38% instances), <tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt> (33; 27% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt> (18; 15% instances), <tt><a href="hyw_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt> (6; 5% instances), <tt><a href="hyw_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="hyw_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hyw_armtdp-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="hyw_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hyw_armtdp-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="hyw_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hyw_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 csubj	color:blue
1	Հայրս	հայր	NOUN	_	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	0	root	_	Translit=Hayrs|LTranslit=hayr|SpaceAfter=No
2	…	…	PUNCT	_	_	4	punct	_	Translit=…|LTranslit=…
3	այսուհանդերձ	այսուհանդերձ	PART	_	_	4	discourse	_	Translit=aysowhanderj|LTranslit=aysowhanderj
4	պէտք	պէտք	ADJ	_	_	1	conj	_	Translit=pētk’|LTranslit=pētk’
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	Translit=ē|LTranslit=em
6	այս	այս	DET	_	Deixis=Prox|PronType=Dem	8	det	_	Translit=ays|LTranslit=ays
7	բոլոր	բոլոր	DET	_	PronType=Tot	8	det	_	Translit=bolor|LTranslit=bolor
8	խեղճութիւնները	խեղճութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	9	obj	_	Translit=xeġč̣owt’iwnnerë|LTranslit=xeġč̣owt’iwn
9	բարեփոխել	բարեփոխել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	4	csubj	_	Translit=barep’oxel|LTranslit=barep’oxel|SpaceAfter=No
10	:	:	PUNCT	_	Foreign=Yes	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	Որքան	որքան	DET	_	PronType=Int	3	det	_	Translit=Ork’an|LTranslit=ork’an
2	՞	՞	PUNCT	_	_	1	punct	_	Translit=?|LTranslit=?
3	ատեն	ատեն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=aten|LTranslit=aten
4	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	Translit=ē|LTranslit=em
5	որ	որ	SCONJ	_	_	7	mark	_	Translit=or|LTranslit=or
6	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	7	aux	_	Translit=kë|LTranslit=kë
7	վիճէին	վիճիլ	VERB	_	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	3	csubj	_	Translit=vič̣ēin|LTranslit=vič̣il
8	այսպէս	այսպէս	ADV	_	Deixis=Prox|PronType=Dem	7	advmod	_	Translit=ayspēs|LTranslit=ayspēs|SpaceAfter=No
9	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj	color:blue
1	Հիմա	հիմա	ADV	_	_	3	advmod	_	Translit=Hima|LTranslit=hima
2	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	3	aux	_	Translit=kë|LTranslit=kë
3	մնար	մնալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	0	root	_	Translit=mnar|LTranslit=mnal
4	հազար	հազար	NUM	_	NumForm=Word|NumType=Card	5	nummod	_	Translit=hazar|LTranslit=hazar
5	ֆրանքը	ֆրանք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	6	obj	_	Translit=frank’ë|LTranslit=frank’
6	ճարել	ճարել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	3	csubj	_	Translit=č̣arel|LTranslit=č̣arel|SpaceAfter=No
7	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


