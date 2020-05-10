---
layout: base
title:  'Statistics of compound in UD_Tamil-TTB'
udver: '2'
---

## Treebank Statistics: UD_Tamil-TTB: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="ta_ttb-dep-compound-prt.html">compound:prt</a></tt>.

13 nodes (0%) are attached to their parents as `compound`.

11 instances of `compound` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07692307692308.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt> (11; 85% instances), <tt><a href="ta_ttb-pos-NUM.html">NUM</a></tt>-<tt><a href="ta_ttb-pos-NUM.html">NUM</a></tt> (2; 15% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound	color:blue
1	அரசின்	அரசு	NOUN	NNG-3SN--	Case=Gen|Gender=Neut|Number=Sing|Person=3	3	nmod	3:nmod:gen	Translit=aracin|LTranslit=aracu
2	பெரு	பெரு	ADJ	JJ-------	_	3	amod	3:amod	Translit=peru|LTranslit=peru
3	முயற்சியால்	முயற்சி	NOUN	NNI-3SN--	Case=Ins|Gender=Neut|Number=Sing|Person=3	8	obl	8:obl:ins	Translit=muyarciyāl|LTranslit=muyarci
4	உலகத்	உலகம்	PROPN	NO--3SN--	Gender=Neut|Number=Sing|Person=3	7	nmod	7:nmod	Translit=ulakat|LTranslit=ulakam
5	தமிழ்ச்	தமிழ்	PROPN	NEN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	7	nmod	7:nmod:nom	Translit=tamilc|LTranslit=tamil
6	செம்மொழி	செம்மொழி	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	7	nmod	7:nmod:nom	Translit=cemmoli|LTranslit=cemmoli
7	மாநாடு	மாநாடு	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	8	nsubj	8:nsubj	Translit=mānāṭu|LTranslit=mānāṭu
8	நடத்தி	நடத்து	VERB	Vt-T---AA	Polarity=Pos|VerbForm=Part|Voice=Act	0	root	0:root	Translit=naṭatti|LTranslit=naṭattu
9	முடிக்கப்	முடி	VERB	Vu-T---AA	Polarity=Pos|VerbForm=Inf|Voice=Act	8	compound	8:compound	Translit=muṭikkap|LTranslit=muṭi
10	பட்டது	படு	AUX	VR-D3SNPA	Gender=Neut|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Pass	8	aux	8:aux	SpaceAfter=No|Translit=paṭṭatu|LTranslit=paṭu
11	.	.	PUNCT	Z#-------	PunctType=Peri	8	punct	8:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound	color:blue
1	பல்வேறு	பல்வேறு	ADJ	JJ-------	_	3	amod	3:amod	Translit=palvēru|LTranslit=palvēru
2	மத்திய	மத்திய	ADJ	JJ-------	_	3	amod	3:amod	Translit=mattiya|LTranslit=mattiya
3	திட்டங்களுக்க்	திட்டம்	NOUN	NND-3PN--	Case=Dat|Gender=Neut|Number=Plur|Person=3	9	obl	9:obl:ஆகு:dat	Translit=tiṭṭaṅkaḷukk|LTranslit=tiṭṭam
4	ஆக	ஆகு	ADP	PP-------	AdpType=Post	3	case	3:case	Translit=āka|LTranslit=āku
5	1	1	NUM	U=-------	NumForm=Digit	7	nummod	7:nummod	Translit=1|LTranslit=1
6	லட்சம்	லட்சம்	NUM	Ux-------	NumType=Card	7	compound	7:compound	Translit=laṭcam|LTranslit=laṭcam
7	கோடி	கோடி	NUM	Ux-------	NumType=Card	9	nsubj	9:nsubj	Translit=kōṭi|LTranslit=kōṭi
8	பிகாருக்கு	பிகார்	PROPN	NED-3PN--	Case=Dat|Gender=Neut|Number=Plur|Person=3	9	obl	9:obl:dat	Translit=pikārukku|LTranslit=pikār
9	அளிக்கப்	அளி	VERB	Vu-T---AA	Polarity=Pos|VerbForm=Inf|Voice=Act	0	root	0:root	Translit=aḷikkap|LTranslit=aḷi
10	படுகிறது	படு	AUX	VR-P3SNPA	Gender=Neut|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Pass	9	aux	9:aux	SpaceAfter=No|Translit=paṭukiratu|LTranslit=paṭu
11	.	.	PUNCT	Z#-------	PunctType=Peri	9	punct	9:punct	Translit=.|LTranslit=.

~~~


