<?php
 date_default_timezone_set('America/Lima');
 class dbconn
  {
    var $connServer=Array("Servidor"=>"","Usuario"=>"","Password"=>"","Db"=>"");
    var $Mysqli, $RecordDB;
    
	// Inicializa el objeto instanciado
    function init()
	 {
            $this->connServer["Servidor"]="localhost";
            $this->connServer["Usuario"] ="root"; 
            $this->connServer["Password"]="123456";  
            $this->connServer["Db"]      ="basededatos";
	 }

    // Por Ref. ObjetoDB, el cual es la apertura de la Base
    function OpenDataBaseQuery($TextoCmd)
     {
	  
      return $this->Mysqli->query($TextoCmd);
     }

    // Por Ref. ObjetoDB, el cual es la ejecucion de una transaccion a la BD
    function OpenDataBase()
     {
       return $this->Mysqli =  new mysqli( $this->connServer["Servidor"], $this->connServer["Usuario"] ,  $this->connServer["Password"],$this->connServer["Db"] );
     }
 
    // Inicia una transaccion 
    function BeginTransaction() 
     {
      $this->Mysqli->autocommit(FALSE);
     }

    // Commit transaction . 
    function CommitTransaction()
     {
      $this->Mysqli->commit();
	  
     }
    function StatementTransaction($TextCmd)
        {
	  $this->Mysqli->multi_query($TextCmd);
	  do{ 
                $this->Mysqli->use_result(); 
          }
		while ($this->Mysqli->next_result()); 
	   
        }
    // Aborta la ejecucion 
    function RollbackTransaction()
     {
       
        $this->Mysqli->rollback();
     }
	 
	 function ErrorTransaction()
     {
        return $this->Mysqli->errno;
     }

    // Cierra la Base de datos
    function CloseDataBase()
        {
	  $this->Mysqli->close();
        }

	
	 
    
    
  }
?>