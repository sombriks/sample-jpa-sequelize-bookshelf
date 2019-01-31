package hq.sombriks.sample.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
@Entity
@Table(name = "invite")
public class Invite {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "invite_id")
  private Integer id;

  @Column(name = "invite_creation")
  @Temporal(TemporalType.TIMESTAMP)
  private Date creation;

  @JoinColumn(name = "invite_status_id")
  private InviteStatus status;

  @JoinColumn(name = "invite_type_id")
  private InviteType type;

  @JoinColumn(name = "person_id")
  private Person person;

  @JoinColumn(name = "party_id")
  private Party party;

  @PrePersist
  public void preInsert() {
    if (creation == null)
      creation = new Date();
      if (status == null)
        status = new InviteStatus(1);
      if (type == null)
        type = new InviteType(1);
    
  }

}