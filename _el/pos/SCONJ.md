---
layout: postag
title: 'DET'
shortdef: 'determiner'
udver: '2'
---


## SCONJ: subordinating conjunction

### Definition

A subordinating conjunction is a conjunction that links constructions by making one of them a constituent of the other. The subordinating conjunction typically marks the incorporated constituent which has the status of a (subordinate) clause.

*που* and *να* are used in several ways:
* *που* is assigned the tag <code>PRON</code> if:
  *  it refers to a noun, e.g. *Έχουμε πολλές πληροφορίες, που*.PRON *δεν οδηγούν όμως πουθενά* "we have much information that, however, leads to nowhere".
  *   it introduces a clausal modifier of a deictic adverb, e.g., _εκεί, που δεν κινδυνεύει ο ίδιος_ "there, where himself is not under some risk_", _σήμερα, που πήραμε αύξηση_ "today that we got a wage rise".
* *που* is assigned the tag <code>SCONJ</code> when: 
   * it introduces a  complement of saying or sense verbs  (criterion: in this case, it can be replaced with the word *ότι* with somewhat different implications), e.g., *Σε είδα που τον κοίταζες.* "I saw that you watched him.",  *Δεν άκουσες που είπε: «Ευχαριστώ, ωραία μου κυρία»;* "Haven't you heard him saying "Thanks my fair lady"?"  
   * it introduces a temporal clause together with the [ADP]() *μετά*  (criterion: in this case, the multiword conjunction *μετά που* can be replaced with the [ADP]() *αφού* resulting into different style probably), e.g., *Τον είδα μετά που χώρισε.* "I met him after he got divorced." *μετά* depends on *που* with the dependency relation [fixed]().
   * it  introduces an etiological or a result clause  (criterion: in this case, it can be replaced with the word *γιατί* resulting into different style probably), e.g., *Δεν σε χωνεύει που έρχεσαι τακτικά στο Μοναστήρι.* "He does not like you because you are regular to the Monastery.", *Ήταν τόσο σκελετωμένο που δεν είχε τη δύναμη να ψάξει για φαγητό.* "It was so skinny that it had no strength to look for food". 
  
    	
- *να* is assigned the tag <code>SCONJ</code> when it introduces  subordinate clauses that  function as:
   -	verb arguments, e.g., *Του είπα <b>να</b> έρθει*.[ccomp]() *εδώ΄* "I told him <b>to</b> come.[ccomp]()  here",   *Το Λιμενικό είναι και το μόνο ικανό <b>να</b> ξεδιαλύνει.*[xcomp]() *την υπόθεση* "Only Maritime Police is able <b>to</b> shed.[xcomp]() light on this case",    *Έτυχε <b>να</b> τον συναντήσετε.*[csubj]() *ποτέ μόνο του;* Lit. happened to him meet ever on his own.
   -	clausal nominal modifiers e.g. *Η μόνη δυνατότητα <b>να</b> πλευρίσει.*[acl]() *σκάφος στην περιοχή είναι η Σκάλα Ωρωπού.*  "The only possibility <b>that</b> a boat docks.[acl]() in this area is the port of Skala Oropou"
	-  goal denoting clauses where *να* or  *για να* introduce the clause; *για* is tagged <code>ADP</code> and depends on *να* with the [fixed]() dependency, e.g., *Σηκώνεται <b>για</b>*.<code>ADP</code> *<b>να</b> με υποδεχτεί.* [advcl]() "He rises <b>to</b> welcome.[advcl]() me".
 -   when it  occurs in relative clauses after the relativisers *που*, *o οποίος*, e.g.,  *Δεν υπάρχει τίποτα παραπάνω* <b>που</b>.[PRON]() <b>να</b>.[SCONJ]() έχει ανακαλύψει η άλλη δυάδα "there is nothing more that.[PRON]()  the other couple would have discovered",  *Στη συνέχεια γράψτε μια συνάρτηση* <b>η οποία</b>. [PRON]() <b>να</b>.[SCONJ]()  *τυπώνει αυτά τα δεδομένα* "Next, write a function that.[PRON]() will print the data." 
   -  all other cases where clauses introduced by *να* function as adverbial modifiers and *να* co-occurs with other uniflected words, e.g.,  *αντί να, δίχως να, παρά να, πριν να, σαν να, χωρίς να, ώσπου να,  ώστε να*. The uniflected words are assigned their original tags and depend on *να* with the [fixed]() dependency, e.g.,  <b>Αντί</b>.[ADP]().[fixed]() <b>να</b> *της δώσει*.[advcl]() *τα παπούτσια στο χέρι, έκανε και παιδί μαζί της.* "<b>Rather than</b> sending.[advcl]() her packing, he had a child with her", *Με ακούει* <b>δίχως</b>.[ADP]().[fixed]() <b>να</b> *με διακόψει*.[advcl]() *με ερωτήσεις* "He listens to me <b>without</b> interrupting.[advcl]() me with questions", *τη ρωτάω*, <b>χωρίς</b>.<code>ADP</code>.[fixed]()   <b>να </b> μπω.[advcl]()  σε συζήτηση για την ανεπάρκεια του σιναφιού μας* "I ask her <b>without</b> opening.[advcl]()  a discussion about our trade's insufficiency"
   
-  *να* is tagged [AUX]() when it introduces the verb (or the auxiliary "to be") of a main clause, e.g., <b>Να</b>.[AUX]()  *έρθεις*.[root]() *γρήγορα* "Come early.",  *Ούτε* <b>να</b>.[AUX]()   *τ' ακούσει*.[root]() "He would not even hear it."  *Ούτε βουλευτής.[root]() να.[AUX]() ήσουν.[AUX]()!* "Imagine what would happen if you were an MP!"
	
- elsewhere [PART](), e.g.,  *Λόλα*, <b>να</b> *ένα μήλο* "Lola, here is an apple."


For coordinating conjunctions, see [CCONJ]().

## Examples

- complementizers, like *αν* / *an* "if", *αφού* / *ara, afou* "since/therefore", *γιατί* / *giati* "why/because", *ενώ* / *eno* "while", *καθώς* / *kathos* "as/while", *μήπως, ότι, πως* / *mipos, oti, pos* "that", *ώστε* / *oste* "so as", *ώσπου* / *ospou* "until"
-	adverbial clause introducers, like *όταν* / *otan* "when", *αφότου* / *afotou* "since", *πριν* / *prin* "before", *μόλις* / *molis* "just, as soon as" (when introducing a clause, not a nominal), *μια και* / *mia.SCONJ ke.CCONJ* (with the dependency _fixed_  between them) "since" 
-	interrogative pronouns *ποιος* / *pios* "who", *πόσος* / *posos* "how many/much", *τι* / *ti* "what kind of" that introduce an indirect question that serves as an argument of a verb or as a clausal modifier of a deverbal noun, e.g., VERB: *ρώτησα ποιο/πόσο/τι θέλεις;* / *rotisa pio/poso/ti theleis* "I asked which/how much/what do you want?", NOUN:  *έχω μείνει με την* <b>απορία τί</b> *στο καλό της είπες* "I am left with the <b>question what</b> on earth you told her". In particular, *τι* may introduce direct questions, e.g., *Τι τα κάνατε τα κινητά σας;* "what have you done with your mobile phones?",  *Τι κάνεις έτσι;* "Why are you reacting like that?". In this case it is considered an interrogative adverb (see [ADV]()) assinged the [PronType]() feature with value [Int]().



## References

Mackridge, Peter. 1985. *The Modern Greek Language. A Descriptive Analysis of Standard Modern Greek.* Oxford University Press, Oxford 1985. 

https://www.greek-language.gr/greekLang/modern_greek/tools/lexica/triantafyllides/

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:41:30 CET -->
