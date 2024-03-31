---
layout: postag
title: 'PRON'
shortdef: 'pronoun'
udver: '2'
---

## PRON: pronoun

Pronouns are words that substitute for nouns  or noun phrases, whose meaning is recoverable from the linguistic or extralinguistic context. Τhey never occur with the noun for which they stand and they cannot be replaced with a synonymous nominal phrase; these facts offer a criterion for setting determiners apart from pronouns.

*που* is assigned the tag <code>PRON</code> if:
  *  it refers to a noun, e.g. *Έχουμε πολλές πληροφορίες, που*.PRON *δεν οδηγούν όμως πουθενά* "we have much information that, however, leads to nowhere".
  *   it introduces a clausal modifier of a deictic adverb, e.g., _εκεί, που δεν κινδυνεύει ο ίδιος_ "there, where himself is not under some risk_", _σήμερα, που πήραμε αύξηση_ "today that we got a wage rise".
* *που* is assigned the tag <code>SCONJ</code> when: 
   * it introduces a  complement of saying or sense verbs  (criterion: in this case, it can be replaced with the word *ότι* with somewhat different implications), e.g., *Σε είδα που τον κοίταζες.* "I saw that you watched him.",  *Δεν άκουσες που είπε: «Ευχαριστώ, ωραία μου κυρία»;* "Haven't you heard him saying "Thanks my fair lady"?" 
   * it introduces the sentential complement of an impersonal verb, e.g., *Φτάνει που την είδα να φεύγει.* "It suffices that I saw her leaving."
   * it introduces a temporal clause together with the [ADP]() *μετά*  (criterion: in this case, the multiword conjunction *μετά που* can be replaced with the [ADP]() *αφού* resulting into different style probably), e.g., *Τον είδα μετά που χώρισε.* "I met him after he got divorced." *μετά* depends on *που* with the dependency relation [fixed]().
   *  it  introduces an etiological or a result clause  (criterion: in this case, it can be replaced with the word *γιατί* resulting into different style probably), e.g., *Δεν σε χωνεύει που έρχεσαι τακτικά στο Μοναστήρι.* "He does not like you because you are regular to the Monastery.", *Ήταν τόσο σκελετωμένο που δεν είχε τη δύναμη να ψάξει για φαγητό.* "It was so skinny that it had no strength to look for food". 
   *  In the MWE _μόνο που_ "only that" where _μόνο_ is assigned the tag [ADV]() and *που* depends on _μόνο_ with the dependency [fixed](). The MWE functions as a [CCONJ](), e.g., _Μόνο που τώρα δεν υπάρχει η τρόικα για να επιβάλει περικοπές μισθών._ "However, now there is no troika to impose wages cuts."


*που* is assigned the tag <code>ADV/code> when it refers to an expression that denotes location or time; in this case, the feature [PronType]() takes the value [Rel]:


*την επόμενη φορά* <b>που</b> *την επισκέφθηκαν άργησαν* "The next time when they visited her, they were late."

 
### Examples

*	interrogative pronouns in direct questions: *ποιος* / *pios* "who", *πόσος* / *posos* "how many/much", *τι* / *ti* "what", e.g., Direct questions: *Ποιο/Πόσο/Τι θέλεις;* / *Pio/Poso/What want.2SG*  "which/how much/what do you want?" 
* personal pronouns: both strong and weak types (clitics), e.g., the weak types *του το* in *του το έδωσα* / *tou to edosa* "I gave it to him"; however, *αυτός* and its inflectional paradigm are  always assigned the PoS [DET]() while its weak types *του της το" etc, are assigned the PoS [PRON]()
*	possessive pronouns: weak types, e.g., *μου* in *το σπίτι μου* / *to spiti mou* "my house"
* reflexive pronouns: *εαυτός* / *eaftos* "self"
*	relative pronouns <code>PronType=Rel</code>: *οποίος* / *opios* "who"


 Greek pronouns inflect for [el-feat/Gender](), [el-feat/Number]() and [el-feat/Case](). 
 


Several words that traditionally have been classified as pronouns are classified as <code>DET</code> in UD2:

* demonstrative pronouns (<code>PronType=Dem</code>): *αυτός* / *aftos* "this", *εκείνος* / *ekinos* "that", *(ε)τούτος* / *(e)toutos* "this/that", *τέτοιος* / *tetios* "such", *τόσος* / *tosos* "this/that many/much, so/as", 
*   indefinite pronouns: 
    *   (<code>PronType=Ind</code>) *άλλος* / *alos* "other", *κάποιος* / *kapios* "somebody", *κάτι* / *kati* "some"
    *   (<code>PronType=Tot</code>) *κάθε* / *kathe* "every", *καθένας* / *kathenas* "each one"
    *   (<code>PronType=Ind/Neg</code>) *κανείς (κανένας)*  /*kanis (kanenas)* "nobody", *τίποτα/ε* / *tipota/e* "nothing/anything"
*   interrogative pronouns when followed by a noun (<code>PronType=Int</code>): *ποιος* / *pios* "who", *πόσος* / *posos* "how many/much", *τι* / *ti* "what kind", e.g., *ποιο/πόσο/τι φαγητό θέλεις;* / *pio/poso/ti fagito thelis?* "which/how much/what kind of food do you want?"
*   relative pronouns when followed by a noun (<code>PronType=Rel</code>): *όποιος/-δήποτε* / *opios/-dipote* "anyone/whoever", *όσος/-δήποτε* / *osos/-dipote* "no matter how many/much", *ό,τι/-δήποτε* / *oti/-dipote* "whichever"
*  (<code>PronType=Εmp</code>) *ίδιος* / *idios* "the same"


### References

Holton, David, Peter Mackridge & Irene Philippaki-Warburton. 1997. *Greek: A Comprehensive Grammar of the Modern Language*. Routledge, London 1997; reprinted 1999, 2002 & 2004. 

Κλαίρης, Χρήστος  & Γεώργιος Μπαμπινώτης. 2001. *Γραμματική της Νέας Ελληνικής* Τόμος Γ’. 2η έκδοση. Αθήνα: Ελληνικά Γράμματα. 

Τζάρτζανος, Αχιλλέας, 2002. *Νεοελληνική Σύνταξις της Κοινής Δημοτικής*. Αθήνα: Εκδόσεις Κυριακίδη. σελ. 225.
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:41:28 CET -->
