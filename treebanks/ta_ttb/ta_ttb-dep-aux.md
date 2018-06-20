---
layout: base
title:  'Statistics of aux in UD_Tamil-TTB'
udver: '2'
---

## Treebank Statistics: UD_Tamil-TTB: Relations: `aux`

This relation is universal.

602 nodes (6%) are attached to their parents as `aux`.

598 instances of `aux` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.31063122923588.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_ttb-pos-AUX.html">AUX</a></tt> (533; 89% instances), <tt><a href="ta_ttb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ta_ttb-pos-AUX.html">AUX</a></tt> (64; 11% instances), <tt><a href="ta_ttb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ta_ttb-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ta_ttb-pos-ADV.html">ADV</a></tt>-<tt><a href="ta_ttb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ta_ttb-pos-AUX.html">AUX</a></tt>-<tt><a href="ta_ttb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_ttb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux	color:blue
1	தொழிலாளர்கள்	தொழிலாளர்	NOUN	NNN-3PA--	Animacy=Anim|Case=Nom|Gender=Com|Number=Plur|Person=3	2	nsubj	2:nsubj	Translit=tolilāḷarkaḷ|LTranslit=tolilāḷar
2	பழிவாங்கப்	பழிவாங்கு	VERB	Vu-T---AA	Polarity=Pos|VerbForm=Inf|Voice=Act	0	root	0:root	Translit=palivāṅkap|LTranslit=palivāṅku
3	படுகின்றனர்	படு	AUX	VR-P3PAPA	Animacy=Anim|Gender=Com|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Pass	2	aux	2:aux	SpaceAfter=No|Translit=paṭukinranar|LTranslit=paṭu
4	.	.	PUNCT	Z#-------	PunctType=Peri	2	punct	2:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 aux	color:blue
1	இதனால்	இதனால்	ADV	AA-------	_	8	advmod	8:advmod	Translit=itanāl|LTranslit=itanāl
2	அவர்கள்	அவர்	PRON	RpN-3PA--	Animacy=Anim|Case=Nom|Gender=Com|Number=Plur|Person=3|PronType=Prs	3	nsubj	3:nsubj	Translit=avarkaḷ|LTranslit=avar
3	கைது	கைது	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	8	obj	8:obj	Translit=kaitu|LTranslit=kaitu
4	செய்யப்	செய்	VERB	Vu-T---AA	Polarity=Pos|VerbForm=Inf|Voice=Act	3	acl	3:acl	Translit=ceyyap|LTranslit=cey
5	படக்	படு	AUX	VU-T---PA	Polarity=Pos|VerbForm=Inf|Voice=Pass	3	aux	3:aux	Translit=paṭak|LTranslit=paṭu
6	கூடும்	கூடு	AUX	VR-F3SNAA	Gender=Neut|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	3	aux	3:aux	Translit=kūṭum|LTranslit=kūṭu
7	எனக்	என்	PART	Tt-T----A	Polarity=Pos|VerbForm=Inf	3	mark	3:mark	Translit=enak|LTranslit=en
8	கருதப்	கருது	VERB	Vu-T---AA	Polarity=Pos|VerbForm=Inf|Voice=Act	0	root	0:root	Translit=karutap|LTranslit=karutu
9	பட்டது	படு	AUX	VR-D3SNPA	Gender=Neut|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Pass	8	aux	8:aux	SpaceAfter=No|Translit=paṭṭatu|LTranslit=paṭu
10	.	.	PUNCT	Z#-------	PunctType=Peri	8	punct	8:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 aux	color:blue
1	இந்தியாவில்	இந்தியா	PROPN	NEL-3SN--	Case=Loc|Gender=Neut|Number=Sing|Person=3	12	obl	12:obl	Translit=intiyāvil|LTranslit=intiyā
2	முதன்முதலில்	முதன்முதல்	NOUN	NNL-3SN--	Case=Loc|Gender=Neut|Number=Sing|Person=3	1	appos	1:appos	Translit=mutanmutalil|LTranslit=mutanmutal
3	தொகுதி	தொகுதி	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	5	nmod	5:nmod	Translit=tokuti|LTranslit=tokuti
4	மேம்பாட்டு	மேம்பாடு	PROPN	NO--3SN--	Gender=Neut|Number=Sing|Person=3	5	nmod	5:nmod	Translit=mēmpāṭṭu|LTranslit=mēmpāṭu
5	நிதியை	நிதி	NOUN	NNA-3SN--	Case=Acc|Gender=Neut|Number=Sing|Person=3	1	obj	1:obj	Translit=nitiyai|LTranslit=niti
6	பொதுப்	பொது	ADJ	JJ-------	_	7	amod	7:amod	Translit=potup|LTranslit=potu
7	பணிகளுக்கு	பணி	NOUN	NND-3PN--	Case=Dat|Gender=Neut|Number=Plur|Person=3	1	appos	1:appos	Translit=paṇikaḷukku|LTranslit=paṇi
8	பயன்படுத்திக்	பயன்படுத்து	VERB	Vt-T---AA	Polarity=Pos|VerbForm=Part|Voice=Act	2	cc	2:cc	Translit=payanpaṭuttik|LTranslit=payanpaṭuttu
9	கொள்ளல்	கொள்	AUX	VZNT3SNAA	Case=Nom|Gender=Neut|Number=Sing|Person=3|Polarity=Pos|VerbForm=Ger|Voice=Act	1	aux	1:aux	Translit=koḷḷal|LTranslit=koḷ
10	ஆம்	ஆகு	AUX	VR-T3SNAA	Gender=Neut|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin|Voice=Act	1	aux	1:aux	Translit=ām|LTranslit=āku
11	என்கிற	என்	PART	Td-P----A	Polarity=Pos|Tense=Pres|VerbForm=Part	1	mark	1:mark	Translit=enkira|LTranslit=en
12	அனுமதியை	அனுமதி	NOUN	NNA-3SN--	Case=Acc|Gender=Neut|Number=Sing|Person=3	18	obj	18:obj	Translit=anumatiyai|LTranslit=anumati
13	மத்திய	மத்திய	ADJ	JJ-------	_	14	amod	14:amod	Translit=mattiya|LTranslit=mattiya
14	அரசு	அரசு	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	18	nsubj	18:nsubj	Translit=aracu|LTranslit=aracu
15	ஏற்கெனவே	ஏற்கெனவே	ADV	AA-------	_	18	advmod	18:advmod	Translit=ērkenavē|LTranslit=ērkenavē
16	நாடாளுமன்ற	நாடாளுமன்றம்	PROPN	NO--3SN--	Gender=Neut|Number=Sing|Person=3	17	nmod	17:nmod	Translit=nāṭāḷumanra|LTranslit=nāṭāḷumanram
17	உறுப்பினர்களுக்கு	உறுப்பினர்	NOUN	NND-3PA--	Animacy=Anim|Case=Dat|Gender=Com|Number=Plur|Person=3	18	iobj	18:iobj	Translit=uruppinarkaḷukku|LTranslit=uruppinar
18	வழங்கி	வழங்கு	VERB	Vt-T---AA	Polarity=Pos|VerbForm=Part|Voice=Act	0	root	0:root	Translit=valaṅki|LTranslit=valaṅku
19	இருந்தது	இரு	AUX	VR-D3SNAA	Gender=Neut|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	18	aux	18:aux	SpaceAfter=No|Translit=iruntatu|LTranslit=iru
20	.	.	PUNCT	Z#-------	PunctType=Peri	18	punct	18:punct	Translit=.|LTranslit=.

~~~


