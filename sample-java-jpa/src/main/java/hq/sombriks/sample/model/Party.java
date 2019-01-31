package hq.sombriks.sample.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
@Entity
@Table(name = "party")
public class Party {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "party_id")
  private Integer id;

  @Column(name = "party_creation")
  @Temporal(TemporalType.TIMESTAMP)
  private Date creation;

  @Column(name = "party_title")
  private String title;
  
  @OneToOne
  @JoinColumn(name = "person_id")
  private Person hoster;

  @OneToOne
  @JoinColumn(name = "party_status_id")
  private PartyStatus status;

  @OneToOne
  @JoinColumn(name = "party_type_id")
  private PartyType type;

  @PrePersist
  public void preInsert() {
    if (creation == null)
      creation = new Date();
    if (status == null)
      status = new PartyStatus(1);
    if (type == null)
      type = new PartyType(1);
  }
}
