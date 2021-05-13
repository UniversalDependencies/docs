---
layout: base
title:  'Statistics of compound:redup in UD_Western_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Western_Armenian-ArmTDP: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="hyw_armtdp-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="hyw_armtdp-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="hyw_armtdp-dep-compound-svc.html">compound:svc</a></tt>.

72 nodes (0%) are attached to their parents as `compound:redup`.

69 instances of `compound:redup` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.23611111111111.

The following 9 pairs of parts of speech are connected with `compound:redup`: <tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt> (45; 63% instances), <tt><a href="hyw_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="hyw_armtdp-pos-ADV.html">ADV</a></tt> (17; 24% instances), <tt><a href="hyw_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hyw_armtdp-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="hyw_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hyw_armtdp-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="hyw_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hyw_armtdp-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="hyw_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="hyw_armtdp-pos-ADP.html">ADP</a></tt>-<tt><a href="hyw_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hyw_armtdp-pos-X.html">X</a></tt>-<tt><a href="hyw_armtdp-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound:redup	color:blue
1	Այնուհետեւ	այնուհետեւ	ADV	_	_	3	advmod	_	Translit=Aynowhetew|LTranslit=aynowhetew
2	երգահանդէսները	երգահանդէս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	3	nsubj	_	Translit=ergahandēsnerë|LTranslit=ergahandēs
3	կրկնուեցան	կրկնուիլ	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=krknowec’an|LTranslit=krknowil
4	թաղէ	թաղ	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	3	obl	_	Translit=t’aġē|LTranslit=t’aġ
5	թաղ	թաղ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	compound:redup	_	Translit=t’aġ|LTranslit=t’aġ|SpaceAfter=No
6	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound:redup	color:blue
1	Ծերունին	ծերունի	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	7	nsubj	_	Translit=Çerownin|LTranslit=çerowni
2	ծուռ	ծուռ	ADV	_	_	7	advmod	_	Translit=çowṙ|LTranslit=çowṙ|SpaceAfter=No
3	-	-	PUNCT	_	_	4	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
4	ծուռ	ծուռ	ADV	_	_	2	compound:redup	_	Translit=çowṙ|LTranslit=çowṙ
5	երիտասարդին	երիտասարդ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	6	nmod:poss	_	Translit=eritasardin|LTranslit=eritasard
6	երեսը	երես	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	7	obl	_	Translit=eresë|LTranslit=eres
7	նայած	նայիլ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=nayaç|LTranslit=nayil
8	ու	ու	CCONJ	_	_	9	cc	_	Translit=ow|LTranslit=ow
9	առած	առնել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	7	conj	_	Translit=aṙaç|LTranslit=aṙnel
10	քալած	քալել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	9	compound:svc	_	Translit=k’alaç|LTranslit=k’alel
11	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	7	aux	_	Translit=ēr|LTranslit=em|SpaceAfter=No
12	:	:	PUNCT	_	Foreign=Yes	7	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:redup	color:blue
1	Ալ	ալ	ADV	_	_	2	advmod	_	Translit=Al|LTranslit=al
2	չպակսեցաւ	պակսիլ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=čpaksec’aw|LTranslit=paksil
3	այդ	այդ	DET	_	Deixis=Med|PronType=Dem	4	det	_	Translit=ayd|LTranslit=ayd
4	վաճառատունէն	վաճառատուն	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Def|Number=Sing	2	obl	_	Translit=vač̣aṙatownēn|LTranslit=vač̣aṙatown
5	մանր	մանր	ADJ	_	Degree=Pos	7	amod	_	Translit=manr|LTranslit=manr
6	մունր	մունր	ADJ	_	Echo=Ech	5	compound:redup	_	Translit=mownr|LTranslit=mownr
7	բաներ	բան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	8	obj	_	Translit=baner|LTranslit=ban
8	գնելու	գնել	VERB	_	Case=Dat|Definite=Ind|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	9	nmod:poss	_	Translit=gnelow|LTranslit=gnel
9	պատրուակով	պատրուակ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	2	obl	_	Translit=patrowakov|LTranslit=patrowak|SpaceAfter=No
10	:	:	PUNCT	_	Foreign=Yes	2	punct	_	Translit=.|LTranslit=.

~~~


